import { Action } from '@ngrx/store';
import { AppState } from './reducers';

export enum AppActionTypes {
  SaveAction = '[App] Save Action',
  LoadAction = '[App] Load Action',
}

export class Save implements Action {
  readonly type = AppActionTypes.SaveAction;
}

export type AppActions = Save;
