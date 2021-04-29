import { createReducer, on } from "@ngrx/store";
import {
  customIncrement,
  decrement,
  increment,
  reset,
  changeChannelName,
} from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),

  /**
   * when we pass any props with action then we can use this value like (action.value)
   */
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: "Modified Aishwarya dev",
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
