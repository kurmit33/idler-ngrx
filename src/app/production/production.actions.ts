import { Action } from '@ngrx/store';
import { State } from './production.reducer';

export enum PRODUCTION_ACTION_TYPES {
  LOAD_PRODUCTIONS = '[Production] Load Productions',
  RESET_PRODUCTIONS = '[Production] Reset Productions',
  WORK_PRODUCTIONS = '[Production] Work Productions',
  TIME_PRODUCTIONS = '[Production] Time Productions',
  BUTTONS_PRODUCTIONS = '[Production] Buttons Productions',
  RESEARCH_BUTTON_PRODUCTIONS = '[Production] Research Button Productions',
  PRICE_PRODUCTIONS = '[Production] Price Productions',
  BUY_PRODUCTIONS = '[Production] Buy Productions',
  UPGRADE_PRODUCTIONS = '[Production] Upgrade Productions',
  RESEARCH_PRODUCTIONS = '[Production] Research Productions',
  EVENT_PRODUCTIONS = '[Production] Event Productions',
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
export class ResetProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.RESET_PRODUCTIONS;
}
export class WorkProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.WORK_PRODUCTIONS;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: boolean }) { }
}
export class TimeProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.TIME_PRODUCTIONS;

  constructor(public payload: {
    cell: number,
    bucket: number,
    hamster: number,
    dynamo: number,
    thunder: number,
  }) { }
}
export class ButtonsProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.BUTTONS_PRODUCTIONS;

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
export class ButtonResearchProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.RESEARCH_BUTTON_PRODUCTIONS;

  constructor(public payload: {
    cell: boolean,
    bucket: boolean,
    hamster: boolean,
    dynamo: boolean,
    thunder: boolean,
  }) { }
}
export class PriceProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.PRICE_PRODUCTIONS;

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
export class BuyProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.BUY_PRODUCTIONS;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: number }) { }
}
export class UpgradeProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.UPGRADE_PRODUCTIONS;

  constructor(public payload: { ind: PRODUCTION_TYPES, diff: number }) { }
}
export class ResearchProduction implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.RESEARCH_PRODUCTIONS;

  constructor(public payload: PRODUCTION_TYPES) { }
}
export class EventProductions implements Action {
  readonly type = PRODUCTION_ACTION_TYPES.EVENT_PRODUCTIONS;

  constructor(public payload: number) { }
}

export type ProductionActions = LoadProductions | ResetProductions | WorkProductions | TimeProductions | ButtonsProductions
  | ButtonResearchProductions | PriceProductions | BuyProductions | UpgradeProductions | ResearchProduction | EventProductions;
