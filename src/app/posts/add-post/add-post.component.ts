import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { addPost } from "../state/post.action";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Add validators on each formControl
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(null, [
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
   * Adding post form data into state (onClick AddPost)
   * @returns
   */
  onAddPost() {
    //Validating postForm is valid or not
    if (!this.postForm.valid) {
      return;
    }

    //Fetch form data in form of post model in which id is optional
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    //Dispaching actition with post data
    this.store.dispatch(addPost({ post }));
  }
}
