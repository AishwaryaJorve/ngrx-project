import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CounterState } from "./counter.state";

/**
 * This selector is responsible to send data of perticular part only
 */
const getCounterState = createFeatureSelector<CounterState>("counter");

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
