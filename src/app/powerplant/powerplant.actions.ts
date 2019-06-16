import { Action } from '@ngrx/store';

export enum PowerplantActionTypes {
  LoadPowerplants = '[Powerplant] Load Powerplants',
  
  
}

export class LoadPowerplants implements Action {
  readonly type = PowerplantActionTypes.LoadPowerplants;
}


export type PowerplantActions = LoadPowerplants;
