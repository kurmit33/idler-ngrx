import { Action } from '@ngrx/store';
import { GameEvent } from './event.model';
import { State } from './event.reducer';

export enum EVENT_ACTION_TYPES {
  LOAD_EVENT = '[Event] Load Events',
  CHANGE_EVENT = '[Event] Change Event',
  CHANGE_TIME = '[Event] Change Time',
}

export enum EVENT_TYPES {
  NO = 'no event',
  WIND = 'wind',
  SOLAR = 'solar',
  WATER = 'water',
  WAVE = 'wave',
  GEOTHERMAL = 'geothermal',
  COAL = 'coal',
  OIL = 'oil',
  BIOGAS = 'biogas',
  NUCLEAR = 'nuclear',
  FUSION = 'fusion',
  POWER = 'power plant',
  PROD = 'production',
  ALL = 'all',
}

export class LoadEvents implements Action {
  readonly type = EVENT_ACTION_TYPES.LOAD_EVENT;

  constructor(public payload: State) {}
}

export class ChangeEvent implements Action {
  readonly type = EVENT_ACTION_TYPES.CHANGE_EVENT;

  constructor(public payload: GameEvent) {}
}

export class ChangeTimeEvent implements Action {
  readonly type = EVENT_ACTION_TYPES.CHANGE_TIME;

  constructor(public payload: number) {}
}


export type EventActions = LoadEvents | ChangeEvent | ChangeTimeEvent;
