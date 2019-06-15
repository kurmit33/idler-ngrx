import { ResourcesActions, ResourcesActionTypes } from './resources.actions';

export interface ResourcesState {
  money: number;
  green: number;
  workers: number;
  price: number;
  energy: number;
  priceTime: number;
  multi: number;
  buildings: number;
  production: number;
}

export const initialState: ResourcesState = {
  money: 0,
  green: 0,
  workers: 0,
  price: 0.1,
  energy: 0,
  priceTime: 0,
  multi: 1,
  buildings: 0,
  production: 0,
};

export function reducer(state = initialState, action: ResourcesActions): ResourcesState {
  switch (action.type) {
    case ResourcesActionTypes.PriceAction:
      return {
        ...state,
        price: action.payload,
        priceTime: 0,
      };
    case ResourcesActionTypes.EnergyAction:
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    case ResourcesActionTypes.SellAction:
      return {
        ...state,
        money: state.money + state.energy * state.price,
        energy: 0,
      };
    case ResourcesActionTypes.SetAction:
      return {
        ...state,
        money: action.payload.money,
        green: action.payload.green,
        workers: action.payload.workers,
        price: action.payload.price,
        energy: action.payload.energy,
        priceTime: action.payload.priceTime,
        multi: action.payload.multi,
        buildings: action.payload.buildings,
      };
    default:
      return state;
  }
}
