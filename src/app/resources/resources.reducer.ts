import { ResourcesActions, ResourcesActionTypes } from './resources.actions';

export interface State {
  money: number;
  green: number;
  workers: number;
  price: number;
  energy: number;
  priceTime: number;
  multi: number;
  buildings: number;
  production: number;
  lastTime: Date;
}

export const initialState: State = {
  money: 0,
  green: 0,
  workers: 0,
  price: 0.1,
  energy: 0,
  priceTime: 0,
  multi: 1,
  buildings: 0,
  production: 0,
  lastTime: new Date(),
};

export function reducer(state = initialState, action: ResourcesActions): State {
  switch (action.type) {
    case ResourcesActionTypes.PriceAction:
      return {
        ...state,
        price: action.payload,
        priceTime: 0,
      };
    case ResourcesActionTypes.PriceTimeAction:
      return {
        ...state,
        priceTime: action.payload,
      };
    case ResourcesActionTypes.EnergyAction:
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    case ResourcesActionTypes.ResetAction:
      return {
        ...state,
        workers: state.workers + action.payload,
        money: 0,
        green: 0,
        energy: 0,
        buildings: 0,
        production: 0,
      };
    case ResourcesActionTypes.MultiAction:
      return {
        ...state,
        multi: action.payload,
      };
      case ResourcesActionTypes.HardResetAction:
        return initialState;
    case ResourcesActionTypes.LastTimeAction:
      return {
        ...state,
        lastTime: action.payload,
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
        lastTime: action.payload.lastTime,
      };
    default:
      return state;
  }
}
