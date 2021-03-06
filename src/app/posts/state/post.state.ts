import { Post } from "src/app/models/post.model";

export interface PostState {
  post: Post[];
}

export const initialState: PostState = {
  post: [
    {
      id: "1",
      title: "sample title 1",
      description: "sample description 1",
    },
    {
      id: "2",
      title: "sample title 2",
      description: "sample description 2"
    },
  ],
};
