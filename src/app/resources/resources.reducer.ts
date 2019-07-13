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
};

export function reducer(state = initialState, action: ResourcesActions): State {
  switch (action.type) {
    case RESOURCES_ACTION_TYPES.LOAD_RESOURCES:
      return action.payload;
    case RESOURCES_ACTION_TYPES.CHANGE_ENERGY:
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_MONEY:
      return {
        ...state,
        money: state.money + action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_GREEN:
      return {
        ...state,
        green: state.green + action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_WORKERS:
      return {
        ...state,
        workers: state.workers + action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_BUILDINGS:
      return {
        ...state,
        buildings: action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_PRODUCTION:
      return {
        ...state,
        production: action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_MULTI:
      return {
        ...state,
        buyMulti: action.payload,
      };
    case RESOURCES_ACTION_TYPES.CHANGE_PRICE:
      return {
        ...state,
        price: action.payload,
        priceTime: 0,
      };
    case RESOURCES_ACTION_TYPES.RESET:
      return {
        ...state,
        workers: state.workers + action.payload,
        money: 0,
        green: 0,
        energy: 0,
        buildings: 0,
        production: 0,
      };
    case RESOURCES_ACTION_TYPES.HARD_RESET:
      return initialState;
    default:
      return state;
  }
}
