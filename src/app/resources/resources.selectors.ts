import { createSelector } from '@ngrx/store';

export const selectResourcesState = state => state.resources;
export const selectState = state => state;

export const takeMoney = createSelector(
  selectResourcesState,
  resources => resources.money,
);

export const takeEnergy = createSelector(
  selectResourcesState,
  resources => resources.energy,
);

export const takeGreen = createSelector(
  selectResourcesState,
  resources => resources.green,
);

export const takePrice = createSelector(
  selectResourcesState,
  resources => resources.price,
);

export const takeBuildings = createSelector(
  selectResourcesState,
  resources => resources.buildings,
);

export const takeWorkes = createSelector(
  selectResourcesState,
  resources => resources.workers,
);

export const takeMulti = createSelector(
  selectResourcesState,
  resouces => resouces.multi,
);

export const takeProduction = createSelector(
  selectResourcesState,
  resouces => resouces.production,
);

export const takeResources = createSelector(
  selectState,
  state => state,
);
