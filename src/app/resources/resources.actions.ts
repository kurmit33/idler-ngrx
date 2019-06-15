import { Action } from '@ngrx/store';
import { ResourcesState } from './resources.reducer';

export enum ResourcesActionTypes {
  PriceAction = '[Resources] Change Price',
  EnergyAction = '[Resources] Change Energy',
  SellAction = '[Resources] Sell Action',
  SetAction = '[Resources] Set Action',
}

export class ChangePrice implements Action {
  readonly type = ResourcesActionTypes.PriceAction;

  constructor(public payload: number) {}
}

export class ChangeEnergy implements Action {
  readonly type = ResourcesActionTypes.EnergyAction;

  constructor(public payload: number) {}
}

export class SellEnergy implements Action {
  readonly type = ResourcesActionTypes.SellAction;
}

export class SetResources implements Action {
  readonly type = ResourcesActionTypes.SetAction;

  constructor(public payload: ResourcesState) {}
}

export type ResourcesActions = ChangePrice | ChangeEnergy | SellEnergy | SetResources;
