import { createSelector } from '@ngrx/store';

export const selectState = state => state;

export const takeState = createSelector(
  selectState,
  state => state,
);
