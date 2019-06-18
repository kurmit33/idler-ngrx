import { Action } from '@ngrx/store';
import { PowerPlant } from './powerplant.model';

export enum PowerplantActionTypes {
  LoadPowerPlants = '[Powerplant] Load Powerplants',
  BuildPowerPlants = '[Powerplant] Build Powerplants',
  UpgradePowerPlants = '[Powerplant] Upgrade Powerplants',
}

export class Load implements Action {
  readonly type = PowerplantActionTypes.LoadPowerPlants;

  constructor(public payload: any) {}
}

export class Build implements Action {
  readonly type = PowerplantActionTypes.BuildPowerPlants;

  constructor(public payload: {powerplant: PowerPlant, num: number}) {}
}

export class Upgrade implements Action {
  readonly type = PowerplantActionTypes.UpgradePowerPlants;

  constructor(public payload: any) {}
}

export type PowerplantActions = Upgrade | Build | Load;
