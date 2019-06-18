import { createSelector } from '@ngrx/store';

export const selectResourcesState = state => state.powerPlant;

export const takePowerPlants = createSelector(
  selectResourcesState,
  powerPlant => powerPlant,
);
