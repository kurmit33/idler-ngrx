import { Action } from '@ngrx/store';
import { State } from './resources.reducer';

export enum RESOURCES_ACTION_TYPES {
  LOAD_RESOURCES = '[Resources] Load Resources',
  START_GAME = '[Resources] Start Game',
  CHANGE_ENERGY = '[Resources] Change Energy',
  CHANGE_MONEY = '[Resources] Chang e Money',
  CHANGE_GREEN = '[Resources] Change Green',
  CHANGE_WORKERS = '[Resources] Change Workers',
  CHANGE_BUILDINGS = '[Resources] Change Buildings',
  CHANGE_PRODUCTION = '[Resources] Change Production',
  CHANGE_MULTI = '[Resources] Change Multi',
  CHANGE_PRICE = '[Resources] Change Price',
  RESET = '[Resources] Reset',
  HARD_RESET = '[Resources] Hard Reset' ,
}

export class LoadResources implements Action {
  readonly type = RESOURCES_ACTION_TYPES.LOAD_RESOURCES;

  constructor(public payload: State) { }
}
export class StartGame implements Action {
  readonly type = RESOURCES_ACTION_TYPES.START_GAME;
}
export class ChangeEnergy implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_ENERGY;

  constructor(public payload: number) { }
}
export class ChangeMoney implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_MONEY;

  constructor(public payload: number) { }
}
export class ChangeGreen implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_GREEN;

  constructor(public payload: number) { }
}
export class ChangeWorkers implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_WORKERS;

  constructor(public payload: number) { }
}
export class ChangeBuildings implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_BUILDINGS;

  constructor(public payload: number) { }
}
export class ChangeProduction implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_PRODUCTION;

  constructor(public payload: number) { }
}
export class ChangeMulit implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_MULTI;

  constructor(public payload: number) { }
}
export class ChangePrice implements Action {
  readonly type = RESOURCES_ACTION_TYPES.CHANGE_PRICE;

  constructor(public payload: number) { }
}
export class Reset implements Action {
  readonly type = RESOURCES_ACTION_TYPES.RESET;

  constructor(public payload: number) { }
}
export class HardReset implements Action {
  readonly type = RESOURCES_ACTION_TYPES.HARD_RESET;
}

export type ResourcesActions = LoadResources | StartGame | ChangeEnergy | ChangeMoney | ChangeGreen | ChangeWorkers
  | ChangeBuildings | ChangeProduction | ChangeMulit | ChangePrice | Reset | HardReset;
