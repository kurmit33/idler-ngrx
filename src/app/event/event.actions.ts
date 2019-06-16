import { Action } from '@ngrx/store';

export enum EventActionTypes {
  LoadEvents = '[Event] Load Events',
  
  
}

export class LoadEvents implements Action {
  readonly type = EventActionTypes.LoadEvents;
}


export type EventActions = LoadEvents;
