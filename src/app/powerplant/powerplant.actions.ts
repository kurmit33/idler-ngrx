import { Action } from '@ngrx/store';

export enum POWERPLANT_ACTION_TYPES {
  LoadPowerPlants = '[Powerplant] Load Powerplants',
  BuildPowerPlants = '[Powerplant] Build Powerplants',
  UpgradePowerPlants = '[Powerplant] Upgrade Powerplants',
  HirePowerPlants = '[Powerplant] Hire Powerplants',
  ResearchPowerPlants = '[Powerplant] Research Powerplants',
  PriceAction = '[Powerplant] Change Price Powerplants',
  Buttons = '[Powerplant] Change Button Status',
  HireButtonAction = '[Powerplant] Change Hire Button Status',
  ResearchButtonAction = '[Powerplant] Change Research Button Status',
  ProductionAction = '[Powerplant] Change Production Action',
  Reset = '[Powerplant] Reset Action',
}

export enum POWERPLANT_TYPES {
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
}

export class LoadPowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.LoadPowerPlants;

  constructor(public payload: any) { }
}

export class PowerPlantReset implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.Reset;
}

export class Production implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ProductionAction;

  constructor(public payload: {ind: POWERPLANT_TYPES, diff: number}) { }
}

export class HireButton implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.HireButtonAction;

  constructor(public payload: {ind: POWERPLANT_TYPES, diff: boolean}) { }
}

export class ResearchButton implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ResearchButtonAction;

  constructor(public payload: {ind: POWERPLANT_TYPES, diff: boolean}) { }
}

export class Build implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.BuildPowerPlants;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}

export class Upgrade implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.UpgradePowerPlants;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}

export class Hire implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.HirePowerPlants;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}

export class Research implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ResearchPowerPlants;

  constructor(public payload: POWERPLANT_TYPES) { }
}

export class ButtonStatus implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.Buttons;

  constructor(public payload: {ind: POWERPLANT_TYPES, build: boolean, upg: boolean}) { }
}

export class Price implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.PriceAction;

  // tslint:disable-next-line: max-line-length
  constructor(public payload: { ind: POWERPLANT_TYPES, diffMoney: number, diffGreen: number, diffMoneyUpgrade: number, diffGreenUpgrade: number }) { }
}

export type POWERPLANT_ACTIONS = HireButton | ResearchButton | Production | Upgrade | Build
| LoadPowerPlants | Hire | Research | Price | ButtonStatus | PowerPlantReset;
