import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { updatePost } from "../state/post.action";
import { getPostByID } from "../state/post.selector";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //Sending id with routing as params
    this.route.paramMap.subscribe((params) => {
      //Get id from params
      const id = params.get("id");
      //fetching post data from selector with passing id as params
      this.store.select(getPostByID, { id }).subscribe((data) => {
        this.post = data;
        this.createForm();
      });
    });
  }

  /**
   * Create form and gave validation for all form control
   */
  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  /**
   * Validation for 'title' Error messages
   * @returns error messages
   */
  showTitleErrors() {
    //fetching title data
    const titleForm = this.postForm.get("title");

    //checking after touched and not valid
    if (titleForm.touched && !titleForm.valid) {
      //checking error for required
      if (titleForm.errors.required) {
        return "Title is required";
      }

      //checking error for minlength
      if (titleForm.errors.minlength) {
        return "title should be of minimum 3 characters length";
      }
    }
  }

  /**
   * Validation for 'description' Error messages
   * @returns
   */
  showDescriptionErrors() {
    const descriptionForm = this.postForm.get("description");
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return "Description is required";
      }

      if (descriptionForm.errors.minlength) {
        return "Description should be of minimum 10 characters length";
      }
    }
  }

  /**
   * on update to update post with id
   * @returns
   */
  onUpdate() {
    if (!this.postForm.valid) {
      return;
    }

    //Fetch post form data and store
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    //create post object
    const post: Post = {
      id: this.post.id,
      title,
      description,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    //After done updation navigate to post
    this.router.navigate(["post"]);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
