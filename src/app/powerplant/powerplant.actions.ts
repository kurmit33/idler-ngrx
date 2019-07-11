import { Action } from '@ngrx/store';

export enum POWERPLANT_ACTION_TYPES {
  LOAD_POWERPLANTS = '[Powerplant] Load PowerPlants',
  RESET_POWERPLANTS = '[Powerplant] Reset PowerPlants',
  PRODUCTION_POWERPLANT = '[Powerplant] Production PowerPlants',
  PRICE_POWERPLANT = '[Powerplant] Price PowerPlant',
  PRICE_POWERPLANTS = '[Powerplant] Price PowerPlants',
  BUTTONS_POWERPLANTS = '[Powerplant] Button PowerPlants',
  HIRE_BUTTON_POWERPLANTS = '[Powerplant] Hire Button PowerPlants',
  RESEARCH_BUTTON_POWERPLANTS = '[Powerplant] Research Button PowerPlants',
  BUILD_POWERPLANT = '[Powerplant] Build PowerPlants',
  UPGRADE_POWERPLANT = '[Powerplant] Upgrade PowerPlants',
  HIRE_POWERPLANT = '[Powerplant] Hire PowerPlants',
  RESEARCH_POWERPLANT = '[Powerplant] Research PowerPlants',
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
  readonly type = POWERPLANT_ACTION_TYPES.LOAD_POWERPLANTS;

  constructor(public payload: any) { }
}
export class ResetPowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.RESET_POWERPLANTS;
}
export class ProductionPowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.PRODUCTION_POWERPLANT;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}
export class ChangePricePowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.PRICE_POWERPLANT;

  constructor(public payload: {
    ind: POWERPLANT_TYPES,
    build: {
      money: number,
      green: number,
    },
    upgrade: {
      money: number,
      green: number,
    }
  }) { }
}
export class PricePowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.PRICE_POWERPLANTS;

  constructor(public payload: {
    wind: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    solar: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    wave: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    water: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    geothermal: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    coal: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    biogas: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    oil: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    nuclear: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
    fusion: {
      build: {
        money: number,
        green: number,
      },
      upgrade: {
        money: number,
        green: number,
      },
    },
  }) { }
}
export class ButtonsPowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.BUTTONS_POWERPLANTS;

  constructor(public payload: {
    wind: {
      build: boolean,
      upg: boolean,
    },
    solar: {
      build: boolean,
      upg: boolean,
    },
    wave: {
      build: boolean,
      upg: boolean,
    },
    water: {
      build: boolean,
      upg: boolean,
    },
    geothermal: {
      build: boolean,
      upg: boolean,
    },
    coal: {
      build: boolean,
      upg: boolean,
    },
    biogas: {
      build: boolean,
      upg: boolean,
    },
    oil: {
      build: boolean,
      upg: boolean,
    },
    nuclear: {
      build: boolean,
      upg: boolean,
    },
    fusion: {
      build: boolean,
      upg: boolean,
    },
  }) { }
}
export class HireButtonPowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.HIRE_BUTTON_POWERPLANTS;

  constructor(public payload: {
    wind: boolean,
    solar: boolean,
    wave: boolean,
    water: boolean,
    geothermal: boolean,
    coal: boolean,
    biogas: boolean,
    oil: boolean,
    nuclear: boolean,
    fusion: boolean,
  }) { }
}
export class ResearchButtonPowerPlants implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.RESEARCH_BUTTON_POWERPLANTS;

  constructor(public payload: {
    wind: boolean,
    solar: boolean,
    wave: boolean,
    water: boolean,
    geothermal: boolean,
    coal: boolean,
    biogas: boolean,
    oil: boolean,
    nuclear: boolean,
    fusion: boolean,
  }) { }
}
export class BuildPowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.BUILD_POWERPLANT;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}
export class UpgradePowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.UPGRADE_POWERPLANT;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}
export class HirePowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.HIRE_POWERPLANT;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}
export class ResearchPowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.RESEARCH_POWERPLANT;

  constructor(public payload: POWERPLANT_TYPES) { }
}

export type POWERPLANT_ACTIONS = LoadPowerPlants | ResetPowerPlants | ProductionPowerPlants | ChangePricePowerPlant
  | ButtonsPowerPlant | HireButtonPowerPlants | ResearchButtonPowerPlants | BuildPowerPlant
  | UpgradePowerPlant | HirePowerPlant | ResearchPowerPlant | PricePowerPlants;

