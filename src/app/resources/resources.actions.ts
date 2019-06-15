import { Action } from '@ngrx/store';

export enum ResourcesActionTypes {
  MoneyAction = '[Resources] Change Money',
  EnergyAction = '[Resources] Change Energy',
  SellAction = '[Resources] Sell Action',
}

export class ChangeMoney implements Action {
  readonly type = ResourcesActionTypes.MoneyAction;

  constructor(public payload: number) {}
}

export class ChangeEnergy implements Action {
  readonly type = ResourcesActionTypes.EnergyAction;

  constructor(public payload: number) {}
}

export class SellEnergy implements Action {
  readonly type = ResourcesActionTypes.SellAction;
}

export type ResourcesActions = ChangeMoney | ChangeEnergy | SellEnergy;
