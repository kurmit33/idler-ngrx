import { Action } from '@ngrx/store';
import { Event } from './event.model';
import { POWERPLANT_TYPES } from '../powerplant/powerplant.actions';

export enum EventActionTypes {
  LoadEvents = '[Event] Load Events',
  ChangeEventAction = '[Event] Change Event',
  ChangeTimeAction = '[Event] Change Time',
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
  readonly type = EventActionTypes.LoadEvents;
}

export class ChangeEvent implements Action {
  readonly type = EventActionTypes.ChangeEventAction;

  constructor(public payload: Event) {}
}

export class ChangeTimeEvent implements Action {
  readonly type = EventActionTypes.ChangeTimeAction;

  constructor(public payload: number) {}
}


export type EventActions = LoadEvents | ChangeEvent | ChangeTimeEvent;
