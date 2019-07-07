import { Action } from '@ngrx/store';
import { State } from './resources.reducer';

export enum RESOURCES_ACTION_TYPES {
  PriceAction = '[Resources] Change Price Action',
  EnergyAction = '[Resources] Change Energy Action',
  SellAction = '[Resources] Sell Action',
  SetAction = '[Resources] Set Action',
  PriceTimeAction = '[Resources] Price Time Action',
  StartType = '[Resources] Start Time Action',
  MultiAction = '[Resources] Select Multi Action',
  MoneyAction = '[Resources] Use Money Action',
  LastTimeAction = '[Resources] Last Time Action',
  ResetAction = '[Resources] Reset Action',
  HardResetAction = '[Resources] Hard Reset Action',
  GreenAction = '[Resources] Change Green Action',
  Workers = '[Resources] Change Workers Action',
  ProductionAction = '[Resources] Change Production Action',
  Buildings = '[Resources] Change Buildings Action',
}

export class ChangePrice implements Action {
  readonly type = RESOURCES_ACTION_TYPES.PriceAction;

  constructor(public payload: number) { }
}

export class ChangeProduction implements Action {
  readonly type = RESOURCES_ACTION_TYPES.ProductionAction;

  constructor(public payload: number) { }
}

export class ChangeEnergy implements Action {
  readonly type = RESOURCES_ACTION_TYPES.EnergyAction;

  constructor(public payload: number) { }
}

export class PriceTime implements Action {
  readonly type = RESOURCES_ACTION_TYPES.PriceTimeAction;

  constructor(public payload: number) { }
}

export class LastTime implements Action {
  readonly type = RESOURCES_ACTION_TYPES.LastTimeAction;

  constructor(public payload: Date) { }
}

export class MultiSelected implements Action {
  readonly type = RESOURCES_ACTION_TYPES.MultiAction;

  constructor(public payload: number) { }
}

export class ChangeMoney implements Action {
  readonly type = RESOURCES_ACTION_TYPES.MoneyAction;

  constructor(public payload: number) { }
}

export class ChangeGreen implements Action {
  readonly type = RESOURCES_ACTION_TYPES.GreenAction;

  constructor(public payload: number) { }
}

export class SellEnergy implements Action {
  readonly type = RESOURCES_ACTION_TYPES.SellAction;
}
export class StartAction implements Action {
  readonly type = RESOURCES_ACTION_TYPES.StartType;
}

export class SetResources implements Action {
  readonly type = RESOURCES_ACTION_TYPES.SetAction;

  constructor(public payload: State) { }
}

export class Reset implements Action {
  readonly type = RESOURCES_ACTION_TYPES.ResetAction;

  constructor(public payload: number) { }
}

export class ChangeWorkers implements Action {
  readonly type = RESOURCES_ACTION_TYPES.Workers;

  constructor(public payload: number) { }
}

export class ChangeBuildings implements Action {
  readonly type = RESOURCES_ACTION_TYPES.Buildings;

  constructor(public payload: number) { }
}

export class HardReset implements Action {
  readonly type = RESOURCES_ACTION_TYPES.HardResetAction;
}

export type ResourcesActions = ChangePrice | ChangeEnergy | SellEnergy | ChangeProduction | ChangeWorkers | ChangeGreen
  | SetResources | PriceTime | MultiSelected | LastTime | Reset | HardReset | ChangeMoney | ChangeBuildings;
