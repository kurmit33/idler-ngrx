import { Action } from '@ngrx/store';

export enum PRODUCTION_ACTION_TYPES {
  LoadProductions = '[Production] Load Productions',
  Reset = '[Production] Reset Productions',
  CellWork = '[Production] Cell Work Action',
  WorkTime = '[Production] Work Time Action',
  TimeAction = '[Production] Change Time Action',
  UpgradeAction = '[Production] Upgrade Action',
  BuyAction = '[Production] Buy Action',
  PriceAction = '[Production] Update Price',
  ButtonStatusAction = '[Production] Button Status',
  ResearchButtonStatusAction = '[Production] Research Button Satus',
  ResearchAction = '[Production] Research Satus',
}

export enum PRODUCTION_TYPES {
  CELL = 'cell',
  BUCKET = 'bucket',
  HAMSTER = 'hamster',
  DYNAMO = 'dynamo',
  THUNDER = 'thunder',
}

export class LoadProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.LoadProductions;

  constructor(public payload: any) { }
}

export class ChangeTime implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.TimeAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: number }) { }
}

export class ProdPrice implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.PriceAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diffUpg: number, diffTime: number }) { }
}

export class ButtonChange implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.ButtonStatusAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diffUpg: boolean, diffTime: boolean }) { }
}

export class ResearchButtonStatus implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.ResearchButtonStatusAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: boolean }) { }
}

export class Work implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.WorkTime;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: boolean }) { }
}

export class Buy implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.BuyAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: number }) { }
}

export class Upgrade implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.UpgradeAction;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: number }) { }
}

export class ProductionReset implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.Reset;
}

export class ResearchProduction implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.ResearchAction;

  constructor(public payload: PRODUCTION_TYPES) { }
}


export type ProductionActions = ResearchButtonStatus | ButtonChange | ProdPrice
  | LoadProductions | ProductionReset | ChangeTime | Work | Upgrade | Buy | ResearchProduction;
