import { Action } from '@ngrx/store';
import { State } from './production.reducer';

export enum PRODUCTION_ACTION_TYPES {
  LOAD_PRODUCTIONS = '[Production] Load Productions',
  Reset = '[Production] Reset Productions',
  CellWork = '[Production] Cell Work Action',
  WorkTime = '[Production] Work Time Action',
  TimeAction = '[Production] Change Time Action',
  UpgradeAction = '[Production] Upgrade Action',
  BuyAction = '[Production] Buy Action',
  PriceAction = '[Production] Update Price',
  ResearchAction = '[Production] Research Satus',
  ButtonStatusAction = '[Production] Button Status',
  ResearchButtonAction = '[Production] Research Button Status',
}

export enum PRODUCTION_TYPES {
  CELL = 'cell',
  BUCKET = 'bucket',
  HAMSTER = 'hamster',
  DYNAMO = 'dynamo',
  THUNDER = 'thunder',
}

export class LoadProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.LOAD_PRODUCTIONS;

  constructor(public payload: State) { }
}

export class ChangeTime implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.TimeAction;

  constructor(public payload: {
    cell: number,
    bucket: number,
    hamster: number,
    dynamo: number,
    thunder: number,
  }) { }
}

export class ProductionButtons implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.ButtonStatusAction;

  constructor(public payload: {
    cell: {
      upg: boolean,
      time: boolean,
    },
    bucket: {
      upg: boolean,
      time: boolean,
    },
    hamster: {
      upg: boolean,
      time: boolean,
    },
    dynamo: {
      upg: boolean,
      time: boolean,
    },
    thunder: {
      upg: boolean,
      time: boolean,
    },
  }) { }
}

export class ProdPrice implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.PriceAction;

  constructor(public payload: {
    cell: {
      diffUpg: number,
      diffTime: number,
    },
    bucket: {
      diffUpg: number,
      diffTime: number,
    },
    hamster: {
      diffUpg: number,
      diffTime: number,
    },
    dynamo: {
      diffUpg: number,
      diffTime: number,
    },
    thunder: {
      diffUpg: number,
      diffTime: number, // dokończyć redux, optymalizacja !
    },
  }) { }
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

export class ButtonResearch implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.ResearchButtonAction;

  constructor(public payload: {
    cell: boolean,
    bucket: boolean,
    hamster: boolean,
    dynamo: boolean,
    thunder: boolean,
  }) { }
}

export type ProductionActions = ProdPrice | ProductionButtons | ButtonResearch
  | LoadProductions | ProductionReset | ChangeTime | Work | Upgrade | Buy | ResearchProduction;
