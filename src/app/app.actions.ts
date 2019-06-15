import { Action } from '@ngrx/store';

export enum AppActionTypes {
  UnloadAction = '[App] Unload Apps',
}

export class Unload implements Action {
  readonly type = AppActionTypes.UnloadAction;
}

export type AppActions = Unload;
