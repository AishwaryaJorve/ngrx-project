import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { PostReducer } from "../posts/state/post.reducer";
import { PostState } from "../posts/state/post.state";

/**
 * Created interface for main state with two substate
 */
export interface AppState {
  counter: CounterState;
  post: PostState;
}

/**
 * craeted main reducer (insted of injecting each reducer in storeModule we can
 * inject appReducere)
 */
export const appReducer = {
  counter: counterReducer,
  post: PostReducer,
};
