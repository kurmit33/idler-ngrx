import { Action } from '@ngrx/store';

export enum OfficeActionTypes {
  LoadOffices = '[Office] Load Offices',
}

export class LoadOffices implements Action {
  readonly type = OfficeActionTypes.LoadOffices;
}


export type OfficeActions = LoadOffices;
