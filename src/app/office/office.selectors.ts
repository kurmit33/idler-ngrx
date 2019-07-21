import { createSelector } from '@ngrx/store';
import { OFFICE_TYPES } from './office.actions';

export const selectOfficeState = state => state.office;

export const takeOffice = createSelector(
  selectOfficeState,
  office => office,
);

export const selectOffice = createSelector(
  takeOffice,
  (office, props: OFFICE_TYPES) => {
    switch (props) {
      case OFFICE_TYPES.ACCUMULATOR:
        return office.accumulator;
      case OFFICE_TYPES.BIG_ACCUMULATOR:
        return office.bigAccumulator;
      case OFFICE_TYPES.SELL:
        return office.sell;
      case OFFICE_TYPES.BIG_SELL:
        return office.bigSell;
      case OFFICE_TYPES.CONTROL:
        return office.control;
    }
  }
);
