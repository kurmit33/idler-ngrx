import { Action } from '@ngrx/store';
import { State } from './office.reducer';

export enum OFFICE_ACTION_TYPES {
  LOAD_OFFICES = '[Office] Load Offices',
  RESET_OFFICES = '[Office] Reset Offices',
  BUTTONS_OFFICES = '[Office] Buttons Offices',
  RESEARCH_BUTTON_OFFICES = '[Office] Research Button Offices',
  PRICE_OFFICES = '[Office] Price Office',
  BUY_ROOM_OFFICES = '[Office] Buy Room Office',
  BUY_TOOL_OFFICES = '[Office] Buy Tool Office',
  RESEARCH_OFFICES = '[Office] Research Office',
  TIME_OFFICES = '[Office] Time Office',
  AUTO_SELL = '[Office] Auto Sell',
  MIN_PRICE = '[Office] Minimum Price',
  OFFLINE = '[Office] Offline Work',
}

export enum OFFICE_TYPES {
  ACCUMULATOR = 'accumulators room',
  BIG_ACCUMULATOR = 'big accumulators room',
  CONTROL = 'control room',
  SELL = 'sell room',
  BIG_SELL = 'big sell room'
}

export class LoadOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.LOAD_OFFICES;

  constructor(public payload: State) { }
}
export class ResetOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.RESET_OFFICES;
}
export class ButtonsOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.BUTTONS_OFFICES;

  constructor(public payload: {
    accu: {
      tool: boolean,
      room: boolean,
    },
    bigAccu: {
      tool: boolean,
      room: boolean,
    },
    sell: {
      tool: boolean,
      room: boolean,
    },
    bigSell: {
      tool: boolean,
      room: boolean,
    },
    control: {
      tool: boolean,
      room: boolean,
    }
  }) { }
}
export class ButtonReasearchOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.RESEARCH_BUTTON_OFFICES;

  constructor(public payload: {
    accu: boolean,
    bigAccu: boolean,
    sell: boolean,
    bigSell: boolean,
    control: boolean,
  }) { }
}
export class PriceOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.PRICE_OFFICES;

  constructor(public payload: {
    accu: {
      room: number,
      tool: number,
    },
    bigAccu: {
      room: number,
      tool: number,
    },
    sell: {
      room: number,
      tool: number,
    },
    bigSell: {
      room: number,
      tool: number,
    },
    control: {
      room: number,
      tool: number,
    }
  }) { }
}
export class BuyRoomOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.BUY_ROOM_OFFICES;

  constructor(public payload: { ind: OFFICE_TYPES, diff: number }) { }
}
export class BuyToolOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.BUY_TOOL_OFFICES;

  constructor(public payload: { ind: OFFICE_TYPES, diff: number }) { }
}
export class ResearchOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.RESEARCH_OFFICES;

  constructor(public payload: OFFICE_TYPES) { }
}
export class TimeOffice implements Action {
  readonly type = OFFICE_ACTION_TYPES.TIME_OFFICES;

  constructor(public payload: {
    sell: number,
    bigSell: number,
  }) { }
}
export class AutoSell implements Action {
  readonly type = OFFICE_ACTION_TYPES.AUTO_SELL;

  constructor(public payload: { ind: OFFICE_TYPES, diff: boolean }) { }
}

export class MinPrice implements Action {
  readonly type = OFFICE_ACTION_TYPES.MIN_PRICE;

  constructor(public payload: {ind: OFFICE_TYPES, diff: number}) { }
}

export class TimeControl implements Action {
  readonly type = OFFICE_ACTION_TYPES.OFFLINE;

  constructor(public payload: Date) { }
}

export type OfficeActions = LoadOffices | ResetOffices | ButtonsOffices | ButtonReasearchOffices | PriceOffices
  | BuyRoomOffices | BuyToolOffices | ResearchOffices | TimeOffice | AutoSell | MinPrice | TimeControl;
