import { PowerPlant } from './powerplant.model';
import { POWERPLANT_ACTION_TYPES, POWERPLANT_ACTIONS, POWERPLANT_TYPES } from './powerplant.actions';

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
  wind: new PowerPlant(0, 1, 1, true, POWERPLANT_TYPES.WIND),
  solar: new PowerPlant(1, 100, 100, true, POWERPLANT_TYPES.SOLAR),
  wave: new PowerPlant(2, 500, 500, true, POWERPLANT_TYPES.WAVE),
  water: new PowerPlant(3, 25000, 25000, true, POWERPLANT_TYPES.WATER),
  geothermal: new PowerPlant(4, 10000000, 1000, true, POWERPLANT_TYPES.GEOTHERMAL),
  coal: new PowerPlant(5, 5000, 10000, false, POWERPLANT_TYPES.COAL),
  biogas: new PowerPlant(6, 250000, 3000000, false, POWERPLANT_TYPES.BIOGAS),
  oil: new PowerPlant(7, 777777, 10000000, false, POWERPLANT_TYPES.OIL),
  nuclear: new PowerPlant(8, 9999999, 50000000, false, POWERPLANT_TYPES.NUCLEAR),
  fusion: new PowerPlant(9, 25000000, 111111100, false, POWERPLANT_TYPES.FUSION),
};

export function reducer(state = initialState, action: POWERPLANT_ACTIONS): State {
  switch (action.type) {
    case POWERPLANT_ACTION_TYPES.LOAD_POWERPLANTS:
      return action.payload;
    case POWERPLANT_ACTION_TYPES.RESET_POWERPLANTS:
      return initialState;
    case POWERPLANT_ACTION_TYPES.PRODUCTION_POWERPLANT:
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
    case POWERPLANT_ACTION_TYPES.PRICE_POWERPLANT:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              price: {
                ...state.wind.price,
                build: {
                  ...state.wind.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.wind.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.solar.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.solar.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.wave.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.wave.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.water.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.water.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.geothermal.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.geothermal.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.coal.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.coal.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.biogas.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.biogas.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.oil.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.oil.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.nuclear.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.nuclear.price.upgrade,
                  money: action.payload.upgrade.money,
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
                  ...state.fusion.price.build,
                  money: action.payload.build.money,
                },
                upgrade: {
                  ...state.fusion.price.upgrade,
                  money: action.payload.upgrade.money,
                }
              }
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.PRICE_POWERPLANTS:
      return {
        ...state,
        wind: {
          ...state.wind,
          price: {
            ...state.wind.price,
            build: {
              ...state.wind.price.build,
              money: action.payload.wind.build.money,
            },
            upgrade: {
              ...state.wind.price.upgrade,
              money: action.payload.wind.upgrade.money,
            }
          }
        },
        solar: {
          ...state.solar,
          price: {
            ...state.solar.price,
            build: {
              ...state.solar.price.build,
              money: action.payload.solar.build.money,
            },
            upgrade: {
              ...state.solar.price.upgrade,
              money: action.payload.solar.upgrade.money,
            }
          }
        },
        wave: {
          ...state.wave,
          price: {
            ...state.wave.price,
            build: {
              ...state.wave.price.build,
              money: action.payload.wave.build.money,
            },
            upgrade: {
              ...state.wave.price.upgrade,
              money: action.payload.wave.upgrade.money,
            }
          }
        },
        water: {
          ...state.water,
          price: {
            ...state.water.price,
            build: {
              ...state.water.price.build,
              money: action.payload.water.build.money,
            },
            upgrade: {
              ...state.water.price.upgrade,
              money: action.payload.water.upgrade.money,
            }
          }
        },
        geothermal: {
          ...state.geothermal,
          price: {
            ...state.geothermal.price,
            build: {
              ...state.geothermal.price.build,
              money: action.payload.geothermal.build.money,
            },
            upgrade: {
              ...state.geothermal.price.upgrade,
              money: action.payload.geothermal.upgrade.money,
            }
          }
        },
        coal: {
          ...state.coal,
          price: {
            ...state.coal.price,
            build: {
              ...state.coal.price.build,
              money: action.payload.coal.build.money,
              green: action.payload.coal.build.green,
            },
            upgrade: {
              ...state.coal.price.upgrade,
              money: action.payload.coal.upgrade.money,
              green: action.payload.coal.upgrade.green,
            }
          }
        },
        biogas: {
          ...state.biogas,
          price: {
            ...state.biogas.price,
            build: {
              ...state.biogas.price.build,
              money: action.payload.biogas.build.money,
              green: action.payload.biogas.build.green,

            },
            upgrade: {
              ...state.biogas.price.upgrade,
              money: action.payload.biogas.upgrade.money,
              green: action.payload.biogas.upgrade.green,

            }
          }
        },
        oil: {
          ...state.oil,
          price: {
            ...state.oil.price,
            build: {
              ...state.oil.price.build,
              money: action.payload.oil.build.money,
              green: action.payload.oil.build.green,

            },
            upgrade: {
              ...state.oil.price.upgrade,
              money: action.payload.oil.upgrade.money,
              green: action.payload.oil.upgrade.green,

            }
          }
        },
        nuclear: {
          ...state.nuclear,
          price: {
            ...state.nuclear.price,
            build: {
              ...state.nuclear.price.build,
              money: action.payload.nuclear.build.money,
              green: action.payload.nuclear.build.green,

            },
            upgrade: {
              ...state.nuclear.price.upgrade,
              money: action.payload.nuclear.upgrade.money,
              green: action.payload.nuclear.upgrade.green,

            }
          }
        },
        fusion: {
          ...state.fusion,
          price: {
            ...state.fusion.price,
            build: {
              ...state.fusion.price.build,
              money: action.payload.fusion.build.money,
              green: action.payload.fusion.build.green,

            },
            upgrade: {
              ...state.fusion.price.upgrade,
              money: action.payload.fusion.upgrade.money,
              green: action.payload.fusion.upgrade.green,

            }
          }
        },
      };
    case POWERPLANT_ACTION_TYPES.BUTTONS_POWERPLANTS:
      return {
        ...state,
        wind: {
          ...state.wind,
          status: {
            ...state.wind.status,
            buildButton: action.payload.wind.build,
            upgradeButton: action.payload.wind.upg,
          }
        },
        solar: {
          ...state.solar,
          status: {
            ...state.solar.status,
            buildButton: action.payload.solar.build,
            upgradeButton: action.payload.solar.upg,
          }
        },
        wave: {
          ...state.wave,
          status: {
            ...state.wave.status,
            buildButton: action.payload.wave.build,
            upgradeButton: action.payload.wave.upg,
          }
        },
        water: {
          ...state.water,
          status: {
            ...state.water.status,
            buildButton: action.payload.water.build,
            upgradeButton: action.payload.water.upg,
          }
        },
        geothermal: {
          ...state.geothermal,
          status: {
            ...state.geothermal.status,
            buildButton: action.payload.geothermal.build,
            upgradeButton: action.payload.geothermal.upg,
          }
        },
        coal: {
          ...state.coal,
          status: {
            ...state.coal.status,
            buildButton: action.payload.coal.build,
            upgradeButton: action.payload.coal.upg,
          }
        },
        biogas: {
          ...state.biogas,
          status: {
            ...state.biogas.status,
            buildButton: action.payload.biogas.build,
            upgradeButton: action.payload.biogas.upg,
          }
        },
        oil: {
          ...state.oil,
          status: {
            ...state.oil.status,
            buildButton: action.payload.oil.build,
            upgradeButton: action.payload.oil.upg,
          }
        },
        nuclear: {
          ...state.nuclear,
          status: {
            ...state.nuclear.status,
            buildButton: action.payload.nuclear.build,
            upgradeButton: action.payload.nuclear.upg,
          }
        },
        fusion: {
          ...state.fusion,
          status: {
            ...state.fusion.status,
            buildButton: action.payload.fusion.build,
            upgradeButton: action.payload.fusion.upg,
          }
        }
      };
    case POWERPLANT_ACTION_TYPES.HIRE_BUTTON_POWERPLANTS:
      return {
        ...state,
        wind: {
          ...state.wind,
          status: {
            ...state.wind.status,
            hireButton: action.payload.wind,
          }
        },
        solar: {
          ...state.solar,
          status: {
            ...state.solar.status,
            hireButton: action.payload.solar,
          }
        },
        wave: {
          ...state.wave,
          status: {
            ...state.wave.status,
            hireButton: action.payload.wave,
          }
        },
        water: {
          ...state.water,
          status: {
            ...state.water.status,
            hireButton: action.payload.water,
          }
        },
        geothermal: {
          ...state.geothermal,
          status: {
            ...state.geothermal.status,
            hireButton: action.payload.geothermal,
          }
        },
        coal: {
          ...state.coal,
          status: {
            ...state.coal.status,
            hireButton: action.payload.coal,
          }
        },
        biogas: {
          ...state.biogas,
          status: {
            ...state.biogas.status,
            hireButton: action.payload.biogas,
          }
        },
        oil: {
          ...state.oil,
          status: {
            ...state.oil.status,
            hireButton: action.payload.oil,
          }
        },
        nuclear: {
          ...state.nuclear,
          status: {
            ...state.nuclear.status,
            hireButton: action.payload.nuclear,
          }
        },
        fusion: {
          ...state.fusion,
          status: {
            ...state.fusion.status,
            hireButton: action.payload.fusion,
          }
        }
      };
    case POWERPLANT_ACTION_TYPES.RESEARCH_BUTTON_POWERPLANTS:
      return {
        ...state,
        wind: {
          ...state.wind,
          status: {
            ...state.wind.status,
            researchButton: action.payload.wind,
          }
        },
        solar: {
          ...state.solar,
          status: {
            ...state.solar.status,
            researchButton: action.payload.solar,
          }
        },
        wave: {
          ...state.wave,
          status: {
            ...state.wave.status,
            researchButton: action.payload.wave,
          }
        },
        water: {
          ...state.water,
          status: {
            ...state.water.status,
            researchButton: action.payload.water,
          }
        },
        geothermal: {
          ...state.geothermal,
          status: {
            ...state.geothermal.status,
            researchButton: action.payload.geothermal,
          }
        },
        coal: {
          ...state.coal,
          status: {
            ...state.coal.status,
            researchButton: action.payload.coal,
          }
        },
        biogas: {
          ...state.biogas,
          status: {
            ...state.biogas.status,
            researchButton: action.payload.biogas,
          }
        },
        oil: {
          ...state.oil,
          status: {
            ...state.oil.status,
            researchButton: action.payload.oil,
          }
        },
        nuclear: {
          ...state.nuclear,
          status: {
            ...state.nuclear.status,
            researchButton: action.payload.nuclear,
          }
        },
        fusion: {
          ...state.fusion,
          status: {
            ...state.fusion.status,
            researchButton: action.payload.fusion,
          }
        }
      };
    case POWERPLANT_ACTION_TYPES.BUILD_POWERPLANT:
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
    case POWERPLANT_ACTION_TYPES.UPGRADE_POWERPLANT:
      switch (action.payload.ind) {
        case POWERPLANT_TYPES.WIND:
          return {
            ...state,
            wind: {
              ...state.wind,
              level: state.wind.level + action.payload.diff,
              space: (action.payload.diff + state.wind.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.SOLAR:
          return {
            ...state,
            solar: {
              ...state.solar,
              level: state.solar.level + action.payload.diff,
              space: (action.payload.diff + state.solar.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.WAVE:
          return {
            ...state,
            wave: {
              ...state.wave,
              level: state.wave.level + action.payload.diff,
              space: (action.payload.diff + state.wave.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.WATER:
          return {
            ...state,
            water: {
              ...state.water,
              level: state.water.level + action.payload.diff,
              space: (action.payload.diff + state.water.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.GEOTHERMAL:
          return {
            ...state,
            geothermal: {
              ...state.geothermal,
              level: state.geothermal.level + action.payload.diff,
              space: (action.payload.diff + state.geothermal.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.COAL:
          return {
            ...state,
            coal: {
              ...state.coal,
              level: state.coal.level + action.payload.diff,
              space: (action.payload.diff + state.coal.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.BIOGAS:
          return {
            ...state,
            biogas: {
              ...state.biogas,
              level: state.biogas.level + action.payload.diff,
              space: (action.payload.diff + state.biogas.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.OIL:
          return {
            ...state,
            oil: {
              ...state.oil,
              level: state.oil.level + action.payload.diff,
              space: (action.payload.diff + state.oil.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.NUCLEAR:
          return {
            ...state,
            nuclear: {
              ...state.nuclear,
              level: state.nuclear.level + action.payload.diff,
              space: (action.payload.diff + state.nuclear.level + 1) * 100,
            }
          };
        case POWERPLANT_TYPES.FUSION:
          return {
            ...state,
            fusion: {
              ...state.fusion,
              level: state.fusion.level + action.payload.diff,
              space: (action.payload.diff + state.fusion.level + 1) * 100,
            }
          };
        default:
          return state;
      }
    case POWERPLANT_ACTION_TYPES.HIRE_POWERPLANT:
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
    case POWERPLANT_ACTION_TYPES.RESEARCH_POWERPLANT:
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
    default:
      return state;
  }
}
