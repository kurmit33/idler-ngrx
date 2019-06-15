import { createSelector } from '@ngrx/store';

export const selectResourcesState = state => state.resources;

export const takeMoney = createSelector(
  selectResourcesState,
  resources => resources.money,
);
