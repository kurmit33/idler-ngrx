import { createSelector } from '@ngrx/store';
import { PRODUCTION_TYPES } from './production.actions';

export const selectProductionState = state => state.production;

export const takeProductionObj = createSelector(
  selectProductionState,
  production => production,
);

export const selectProductionObj = createSelector(
  takeProductionObj,
  (production, props: PRODUCTION_TYPES) => {
    switch (props) {
      case PRODUCTION_TYPES.CELL:
        return production.cell;
      case PRODUCTION_TYPES.BUCKET:
        return production.bucket;
      case PRODUCTION_TYPES.HAMSTER:
        return production.hamster;
      case PRODUCTION_TYPES.DYNAMO:
        return production.dynamo;
      case PRODUCTION_TYPES.THUNDER:
        return production.thunder;
    }
  }
);
