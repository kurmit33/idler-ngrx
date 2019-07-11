import { Action } from '@ngrx/store';

export enum OFFICE_ACTION_TYPES {
  LOAD_OFFICE = '[Office] Load Offices',
}

export class LoadOffices implements Action {
  readonly type = OFFICE_ACTION_TYPES.LOAD_OFFICE;
}


export type OfficeActions = LoadOffices;
