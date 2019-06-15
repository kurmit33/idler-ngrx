import { ResourcesActions, ResourcesActionTypes } from './resources.actions';

export interface ResourcesState {
  money: number;
  energy: number;
  price: number;
}

export const initialState: ResourcesState = {
  money: 0,
  energy: 0,
  price: 0.1,
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
    case ResourcesActionTypes.SellAction:
      return {
        ...state,
        money: state.energy * state.price,
        energy: 0,
      };
    default:
      return state;
  }
}
