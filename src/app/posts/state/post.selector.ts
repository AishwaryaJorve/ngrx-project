import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState = createFeatureSelector<PostState>("post");

export const getPost = createSelector(getPostState, (state) => {
  return state.post;
});

/**
 * Here we are getting id with props and have to send post data of that id
 * for this we are finding post data with comparing props id
 */
export const getPostByID = createSelector(getPostState, (state, props) => {
  return state.post.find((post) => post.id === props.id);
});
