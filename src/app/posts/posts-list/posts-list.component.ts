import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { deletePost } from "../state/post.action";
import { getPost } from "../state/post.selector";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"],
})
export class PostsListComponent implements OnInit {
  post: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //Whatever we want to get from store  have to give call to selector
    this.post = this.store.select(getPost);
  }

  onDeletePost(id: string) {
    if (confirm("Are you sure you want to delete")) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
