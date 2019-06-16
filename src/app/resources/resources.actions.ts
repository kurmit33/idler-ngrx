import { Action } from '@ngrx/store';
import { ResourcesState } from './resources.reducer';

export enum ResourcesActionTypes {
  PriceAction = '[Resources] Change Price Action',
  EnergyAction = '[Resources] Change Energy Action',
  SellAction = '[Resources] Sell Action',
  SetAction = '[Resources] Set Action',
  PriceTimeAction = '[Resources] Price Time Action',
  StartType = '[Resources] Start Time Action',
}

export class ChangePrice implements Action {
  readonly type = ResourcesActionTypes.PriceAction;

  constructor(public payload: number) {}
}

export class ChangeEnergy implements Action {
  readonly type = ResourcesActionTypes.EnergyAction;

  constructor(public payload: number) {}
}

export class PriceTime implements Action {
  readonly type = ResourcesActionTypes.PriceTimeAction;

  constructor(public payload: number) {}
}

export class SellEnergy implements Action {
  readonly type = ResourcesActionTypes.SellAction;
}
export class StartAction implements Action {
  readonly type = ResourcesActionTypes.StartType;
}

export class SetResources implements Action {
  readonly type = ResourcesActionTypes.SetAction;

  constructor(public payload: ResourcesState) {}
}

export type ResourcesActions = ChangePrice | ChangeEnergy | SellEnergy | SetResources | PriceTime;
