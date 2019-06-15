import { ResourcesActions, ResourcesActionTypes } from './resources.actions';

export interface ResourcesState {
  money: number;
  energy: number;
}

export const initialState: ResourcesState = {
  money: 0,
  energy: 0,
};

export function reducer(state = initialState, action: ResourcesActions): ResourcesState {
  switch (action.type) {
    case ResourcesActionTypes.MoneyAction:
      return {
        ...state,
        money: state.money + action.payload,
      };
    case ResourcesActionTypes.EnergyAction:
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    default:
      return state;
  }
}
