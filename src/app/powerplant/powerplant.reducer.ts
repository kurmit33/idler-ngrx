import { PowerPlant } from './powerplant.model';
import { POWERPLANT_ACTION_TYPES, POWERPLANT_ACTIONS, POWERPLANT_TYPES, Upgrade } from './powerplant.actions';

export interface State {
  wind: PowerPlant;
  solar: PowerPlant;
  wave: PowerPlant;
  water: PowerPlant;
  geothermal: PowerPlant;
  coal: PowerPlant;
  biogas: PowerPlant;
  oil: PowerPlant;
  nuclear: PowerPlant;
  fusion: PowerPlant;
}


export const initialState: State = {
  wind: new PowerPlant(0, 1, 0.01, true, POWERPLANT_TYPES.WIND),
  solar: new PowerPlant(1, 100, 1, true, POWERPLANT_TYPES.SOLAR),
  wave: new PowerPlant(2, 500, 5, true, POWERPLANT_TYPES.WAVE),
  water: new PowerPlant(3, 25000, 250, true, POWERPLANT_TYPES.WATER),
  geothermal: new PowerPlant(4, 100000, 1000, true, POWERPLANT_TYPES.GEOTHERMAL),
  coal: new PowerPlant(5, 5000, 100, false, POWERPLANT_TYPES.COAL),
  biogas: new PowerPlant(6, 250000, 30000, false, POWERPLANT_TYPES.BIOGAS),
  oil: new PowerPlant(7, 777777, 100000, false, POWERPLANT_TYPES.OIL),
  nuclear: new PowerPlant(8, 9999999, 500000, false, POWERPLANT_TYPES.NUCLEAR),
  fusion: new PowerPlant(9, 25000000, 1111111, false, POWERPLANT_TYPES.FUSION),
};

export function reducer(state = initialState, action: POWERPLANT_ACTIONS): State {
  switch (action.type) {
    case POWERPLANT_ACTION_TYPES.BuildPowerPlants:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              buildings: state.wind.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              buildings: state.solar.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              buildings: state.wave.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              buildings: state.water.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              buildings: state.geothermal.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              buildings: state.coal.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              buildings: state.biogas.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              buildings: state.oil.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              buildings: state.nuclear.buildings + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              buildings: state.fusion.buildings + action.payload.diff,
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.UpgradePowerPlants:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              space: (action.payload.diff + state.wind.level + 1) * 100,
              level: state.wind.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              space: (action.payload.diff + state.solar.level + 1) * 100,
              level: state.solar.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              space: (action.payload.diff + state.wave.level + 1) * 100,
              level: state.wave.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              space: (action.payload.diff + state.water.level + 1) * 100,
              level: state.water.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              space: (action.payload.diff + state.geothermal.level + 1) * 100,
              level: state.geothermal.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              space: (action.payload.diff + state.coal.level + 1) * 100,
              level: state.coal.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              space: (action.payload.diff + state.biogas.level + 1) * 100,
              level: state.biogas.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              space: (action.payload.diff + state.oil.level + 1) * 100,
              level: state.oil.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              space: (action.payload.diff + state.nuclear.level + 1) * 100,
              level: state.nuclear.level + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              space: (action.payload.diff + state.fusion.level + 1) * 100,
              level: state.fusion.level + action.payload.diff,
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.HirePowerPlants:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              engineers: state.wind.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              engineers: state.solar.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              engineers: state.wave.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              engineers: state.water.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              engineers: state.geothermal.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              engineers: state.coal.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              engineers: state.biogas.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              engineers: state.oil.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              engineers: state.nuclear.engineers + action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              engineers: state.fusion.engineers + action.payload.diff,
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.ResearchPowerPlants:
      switch (action.payload) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              status: {
                ...state.wind.status,
                research: true,
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.PriceAction:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              price: {
                ...state.wind.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              price: {
                ...state.solar.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              price: {
                ...state.wave.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              price: {
                ...state.water.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              price: {
                ...state.geothermal.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              price: {
                ...state.coal.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              price: {
                ...state.biogas.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              price: {
                ...state.oil.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              price: {
                ...state.nuclear.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              price: {
                ...state.fusion.price,
                build: {
                  money: action.payload.diffMoney,
                  green: action.payload.diffGreen,
                },
                upgrade: {
                  money: action.payload.diffMoneyUpgrade,
                  green: action.payload.diffGreenUpgrade,
                }
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.Buttons:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              status: {
                ...state.wind.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              status: {
                ...state.solar.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              status: {
                ...state.wave.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              status: {
                ...state.water.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              status: {
                ...state.geothermal.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              status: {
                ...state.coal.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              status: {
                ...state.biogas.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              status: {
                ...state.oil.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              status: {
                ...state.nuclear.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              status: {
                ...state.fusion.status,
                buildButton: action.payload.build,
                upgradeButton: action.payload.upg,
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.ResearchButtonAction:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              status: {
                ...state.wind.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              status: {
                ...state.solar.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              status: {
                ...state.wave.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              status: {
                ...state.water.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              status: {
                ...state.geothermal.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              status: {
                ...state.coal.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              status: {
                ...state.biogas.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              status: {
                ...state.oil.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              status: {
                ...state.nuclear.status,
                researchButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              status: {
                ...state.fusion.status,
                researchButton: action.payload.diff,
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.HireButtonAction:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              status: {
                ...state.wind.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              status: {
                ...state.solar.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              status: {
                ...state.wave.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              status: {
                ...state.water.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              status: {
                ...state.geothermal.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              status: {
                ...state.coal.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              status: {
                ...state.biogas.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              status: {
                ...state.oil.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              status: {
                ...state.nuclear.status,
                hireButton: action.payload.diff,
              }
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              status: {
                ...state.fusion.status,
                hireButton: action.payload.diff,
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.ProductionAction:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              production: action.payload.diff,
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              production: action.payload.diff,
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.LoadPowerPlants:
      return action.payload;
    case POWERPLANT_ACTION_TYPES.Reset:
      return initialState;
    default:
      return state;
  }
}
