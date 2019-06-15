import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadAction = '[App] Load Apps',
  UnloadAction = '[App] Unload Apps',
}

export class Load implements Action {
  readonly type = AppActionTypes.LoadAction;
}

export class Unload implements Action {
  readonly type = AppActionTypes.UnloadAction;
}

export type AppActions = Load | Unload;
