import { ResourcesActions, RESOURCES_ACTION_TYPES } from './resources.actions';

export interface State {
  money: number;
  green: number;
  workers: number;
  price: number;
  energy: number;
  priceTime: number;
  buyMulti: number;
  prodMulti: number;
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
  buyMulti: 1,
  prodMulti: 0,
  buildings: 0,
  production: 0,
  lastTime: new Date(),
};

export function reducer(state = initialState, action: ResourcesActions): State {
  switch (action.type) {
    case RESOURCES_ACTION_TYPES.PriceAction:
      return {
        ...state,
        price: action.payload,
        priceTime: 0,
      };
    case RESOURCES_ACTION_TYPES.Buildings:
      return {
        ...state,
        buildings: action.payload,
      };
    case RESOURCES_ACTION_TYPES.ProductionAction:
      return {
        ...state,
        production: action.payload,
      };
    case RESOURCES_ACTION_TYPES.PriceTimeAction:
      return {
        ...state,
        priceTime: action.payload,
      };
    case RESOURCES_ACTION_TYPES.EnergyAction:
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    case RESOURCES_ACTION_TYPES.ResetAction:
      return {
        ...state,
        workers: state.workers + action.payload,
        money: 0,
        green: 0,
        energy: 0,
        buildings: 0,
        production: 0,
      };
    case RESOURCES_ACTION_TYPES.MultiAction:
      return {
        ...state,
        buyMulti: action.payload,
      };
    case RESOURCES_ACTION_TYPES.HardResetAction:
      return initialState;
    case RESOURCES_ACTION_TYPES.LastTimeAction:
      return {
        ...state,
        lastTime: action.payload,
      };
    case RESOURCES_ACTION_TYPES.SellAction:
      return {
        ...state,
        money: state.money + state.energy * state.price,
        energy: 0,
      };
    case RESOURCES_ACTION_TYPES.MoneyAction:
      return {
        ...state,
        money: state.money + action.payload,
      };
    case RESOURCES_ACTION_TYPES.Workers:
      return {
        ...state,
        workers: state.workers + action.payload,
      };
    case RESOURCES_ACTION_TYPES.GreenAction:
      return {
        ...state,
        green: state.green + action.payload,
      };
    case RESOURCES_ACTION_TYPES.SetAction:
      return action.payload;
    default:
      return state;
  }
}
