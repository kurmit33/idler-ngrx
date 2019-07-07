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
  ChangePriceAction = '[Powerplant] Change Price PowerPlant',
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

export class ProductionPowerPlant implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ProductionAction;

  constructor(public payload: { ind: POWERPLANT_TYPES, diff: number }) { }
}
export class ChangePowerPlantPrice implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ChangePriceAction;

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

export class HireButton implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.HireButtonAction;

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

export class ResearchButton implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.ResearchButtonAction;

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

export class Price implements Action {
  readonly type = POWERPLANT_ACTION_TYPES.PriceAction;

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

export type POWERPLANT_ACTIONS = HireButton | ResearchButton | ProductionPowerPlant | Upgrade | Build
  | LoadPowerPlants | Hire | Research | Price | ButtonStatus | PowerPlantReset | ChangePowerPlantPrice;
