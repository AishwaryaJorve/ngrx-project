import {
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { PostState } from "./post.state";

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getPostState = createFeatureSelector<PostState>(
  "post"
);

export const getPost = createSelector(
  getPostState,
  (state) => {
    return state.post;
  }
);

/**
 * Here we are getting id with props and have to send post data of that id
 * for this we are finding post data with comparing props id
 */
export const getPostByID = createSelector(
  getPostState,
  (state, props) => {
    return state.post.find((post) => post.id === props.id);
  }
);
