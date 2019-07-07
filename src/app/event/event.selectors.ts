import { createSelector } from '@ngrx/store';

export const selectEventState = state => state.event;

export const takeWorkEvent = createSelector(
  selectEventState,
  resources => resources.workEvent,
);
