import { ProductionAction } from './production.model';
import { PRODUCTION_TYPES, PRODUCTION_ACTION_TYPES, ProductionActions } from './production.actions';

export interface State {
  cell: ProductionAction;
  bucket: ProductionAction;
  hamster: ProductionAction;
  dynamo: ProductionAction;
  thunder: ProductionAction;
}

export const initialState: State = {
  cell: new ProductionAction(0, PRODUCTION_TYPES.CELL, 'Search for batteries', 'Childrens', 'Catch child', 1, 1, true),
  bucket: new ProductionAction(1, PRODUCTION_TYPES.BUCKET, 'Steal energy in a bucket', 'Thiefs', 'Hire thief', 10, 10, false),
  hamster: new ProductionAction(2, PRODUCTION_TYPES.HAMSTER, 'Use your Hamster', 'Hamsters', 'Buy hamster', 50, 50, false),
  dynamo: new ProductionAction(3, PRODUCTION_TYPES.DYNAMO, 'Use your legs', 'Bikes', 'Steal bike', 250, 250, false),
  thunder: new ProductionAction(4, PRODUCTION_TYPES.THUNDER, 'Try to catch thunder', 'Dancers', 'Hire dancer', 1250, 1250, false),
};


export function reducer(state = initialState, action: ProductionActions): State {
  switch (action.type) {
    case PRODUCTION_ACTION_TYPES.LOAD_PRODUCTIONS:
      return action.payload;
    case PRODUCTION_ACTION_TYPES.RESET_PRODUCTIONS:
      return initialState;
    case PRODUCTION_ACTION_TYPES.WORK_PRODUCTIONS:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              status: {
                ...state.cell.status,
                work: action.payload.diff,
              }
            }
          };
        case PRODUCTION_TYPES.BUCKET:
          return {
            ...state,
            bucket: {
              ...state.bucket,
              status: {
                ...state.bucket.status,
                work: action.payload.diff,
              }
            }
          };
        case PRODUCTION_TYPES.HAMSTER:
          return {
            ...state,
            hamster: {
              ...state.hamster,
              status: {
                ...state.hamster.status,
                work: action.payload.diff,
              }
            }
          };
        case PRODUCTION_TYPES.DYNAMO:
          return {
            ...state,
            dynamo: {
              ...state.dynamo,
              status: {
                ...state.dynamo.status,
                work: action.payload.diff,
              }
            }
          };
        case PRODUCTION_TYPES.THUNDER:
          return {
            ...state,
            thunder: {
              ...state.thunder,
              status: {
                ...state.thunder.status,
                work: action.payload.diff,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.TIME_PRODUCTIONS:
      return {
        ...state,
        cell: {
          ...state.cell,
          time: action.payload.cell,
        },
        bucket: {
          ...state.bucket,
          time: action.payload.bucket,
        },
        hamster: {
          ...state.hamster,
          time: action.payload.hamster,
        },
        dynamo: {
          ...state.dynamo,
          time: action.payload.dynamo,
        },
        thunder: {
          ...state.thunder,
          time: action.payload.thunder,
        }
      };
    case PRODUCTION_ACTION_TYPES.BUTTONS_PRODUCTIONS:
      return {
        ...state,
        cell: {
          ...state.cell,
          status: {
            ...state.cell.status,
            upgradeButton: action.payload.cell.upg,
            timeResourceButton: action.payload.cell.time,
          }
        },
        bucket: {
          ...state.bucket,
          status: {
            ...state.bucket.status,
            upgradeButton: action.payload.bucket.upg,
            timeResourceButton: action.payload.bucket.time,
          }
        },
        hamster: {
          ...state.hamster,
          status: {
            ...state.hamster.status,
            upgradeButton: action.payload.hamster.upg,
            timeResourceButton: action.payload.hamster.time,
          }
        },
        dynamo: {
          ...state.dynamo,
          status: {
            ...state.dynamo.status,
            upgradeButton: action.payload.dynamo.upg,
            timeResourceButton: action.payload.dynamo.time,
          }
        },
        thunder: {
          ...state.thunder,
          status: {
            ...state.thunder.status,
            upgradeButton: action.payload.thunder.upg,
            timeResourceButton: action.payload.thunder.time,
          }
        }
      };
    case PRODUCTION_ACTION_TYPES.RESEARCH_BUTTON_PRODUCTIONS:
      return {
        ...state,
        cell: {
          ...state.cell,
          status: {
            ...state.cell.status,
            researchButton: action.payload.cell,
          }
        },
        bucket: {
          ...state.bucket,
          status: {
            ...state.bucket.status,
            researchButton: action.payload.bucket,
          }
        },
        hamster: {
          ...state.hamster,
          status: {
            ...state.hamster.status,
            researchButton: action.payload.hamster,
          }
        },
        dynamo: {
          ...state.dynamo,
          status: {
            ...state.dynamo.status,
            researchButton: action.payload.dynamo,
          }
        },
        thunder: {
          ...state.thunder,
          status: {
            ...state.thunder.status,
            researchButton: action.payload.thunder,
          }
        }
      };
    case PRODUCTION_ACTION_TYPES.PRICE_PRODUCTIONS:
      return {
        ...state,
        cell: {
          ...state.cell,
          price: {
            ...state.cell.price,
            upgrade: action.payload.cell.diffUpg,
            timeResource: action.payload.cell.diffTime,
          }
        },
        bucket: {
          ...state.bucket,
          price: {
            ...state.bucket.price,
            upgrade: action.payload.bucket.diffUpg,
            timeResource: action.payload.bucket.diffTime,
          }
        },
        hamster: {
          ...state.hamster,
          price: {
            ...state.hamster.price,
            upgrade: action.payload.hamster.diffUpg,
            timeResource: action.payload.hamster.diffTime,
          }
        },
        dynamo: {
          ...state.dynamo,
          price: {
            ...state.dynamo.price,
            upgrade: action.payload.dynamo.diffUpg,
            timeResource: action.payload.dynamo.diffTime,
          }
        },
        thunder: {
          ...state.thunder,
          price: {
            ...state.thunder.price,
            upgrade: action.payload.thunder.diffUpg,
            timeResource: action.payload.thunder.diffTime,
          }
        }
      };
    case PRODUCTION_ACTION_TYPES.BUY_PRODUCTIONS:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              timeResources: state.cell.timeResources + action.payload.diff,
              production: {
                ...state.cell.production,
                time: state.cell.production.startTime - ((action.payload.diff + state.cell.timeResources) * 4),
              }
            }
          };
        case PRODUCTION_TYPES.BUCKET:
          return {
            ...state,
            bucket: {
              ...state.bucket,
              timeResources: state.bucket.timeResources + action.payload.diff,
              production: {
                ...state.bucket.production,
                time: state.bucket.production.startTime - ((action.payload.diff + state.bucket.timeResources) * 5),
              }
            }
          };
        case PRODUCTION_TYPES.HAMSTER:
          return {
            ...state,
            hamster: {
              ...state.hamster,
              timeResources: state.hamster.timeResources + action.payload.diff,
              production: {
                ...state.hamster.production,
                time: state.hamster.production.startTime - ((action.payload.diff + state.hamster.timeResources) * 25),
              }
            }
          };
        case PRODUCTION_TYPES.DYNAMO:
          return {
            ...state,
            dynamo: {
              ...state.dynamo,
              timeResources: state.dynamo.timeResources + action.payload.diff,
              production: {
                ...state.dynamo.production,
                time: state.dynamo.production.startTime - ((action.payload.diff + state.dynamo.timeResources) * 125),
              }
            }
          };
        case PRODUCTION_TYPES.THUNDER:
          return {
            ...state,
            thunder: {
              ...state.thunder,
              timeResources: state.thunder.timeResources + action.payload.diff,
              production: {
                ...state.thunder.production,
                time: state.thunder.production.startTime - ((action.payload.diff + state.thunder.timeResources) * 625),
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.UPGRADE_PRODUCTIONS:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              level: state.cell.level + action.payload.diff,
              production: {
                ...state.cell.production,
                energy: (1 + state.cell.level + action.payload.diff) * state.cell.multi.production * 30,
              }
            }
          };
        case PRODUCTION_TYPES.BUCKET:
          return {
            ...state,
            bucket: {
              ...state.bucket,
              level: state.bucket.level + action.payload.diff,
              production: {
                ...state.bucket.production,
                energy: (1 + state.bucket.level + action.payload.diff) * state.bucket.multi.production * 30,
              }
            }
          };
        case PRODUCTION_TYPES.HAMSTER:
          return {
            ...state,
            hamster: {
              ...state.hamster,
              level: state.hamster.level + action.payload.diff,
              production: {
                ...state.hamster.production,
                energy: (1 + state.hamster.level + action.payload.diff) * state.hamster.multi.production * 30,
              }
            }
          };
        case PRODUCTION_TYPES.DYNAMO:
          return {
            ...state,
            dynamo: {
              ...state.dynamo,
              level: state.dynamo.level + action.payload.diff,
              production: {
                ...state.dynamo.production,
                energy: (1 + state.dynamo.level + action.payload.diff) * state.dynamo.multi.production * 30,
              }
            }
          };
        case PRODUCTION_TYPES.THUNDER:
          return {
            ...state,
            thunder: {
              ...state.thunder,
              level: state.thunder.level + action.payload.diff,
              production: {
                ...state.thunder.production,
                energy: (1 + state.thunder.level + action.payload.diff) * state.thunder.multi.production * 30,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.RESEARCH_PRODUCTIONS:
      switch (action.payload) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              status: {
                ...state.cell.status,
                research: true,
              }
            }
          };
        case PRODUCTION_TYPES.BUCKET:
          return {
            ...state,
            bucket: {
              ...state.bucket,
              status: {
                ...state.bucket.status,
                research: true,
              }
            }
          };
        case PRODUCTION_TYPES.HAMSTER:
          return {
            ...state,
            hamster: {
              ...state.hamster,
              status: {
                ...state.hamster.status,
                research: true,
              }
            }
          };
        case PRODUCTION_TYPES.DYNAMO:
          return {
            ...state,
            dynamo: {
              ...state.dynamo,
              status: {
                ...state.dynamo.status,
                research: true,
              }
            }
          };
        case PRODUCTION_TYPES.THUNDER:
          return {
            ...state,
            thunder: {
              ...state.thunder,
              status: {
                ...state.thunder.status,
                research: true,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.EVENT_PRODUCTIONS:
      return {
        ...state,
        cell: {
          ...state.cell,
          production: {
            ...state.cell.production,
            energy: ((1 + state.cell.level ) * state.cell.multi.production * 30) * (1 + action.payload),
          },
        },
        bucket: {
          ...state.bucket,
          production: {
            ...state.bucket.production,
            energy: ((1 + state.bucket.level ) * state.bucket.multi.production * 30) * (1 + action.payload),
          },
        },
        hamster: {
          ...state.hamster,
          production: {
            ...state.hamster.production,
            energy: ((1 + state.hamster.level ) * state.hamster.multi.production * 30) * (1 + action.payload),
          },
        },
        dynamo: {
          ...state.dynamo,
          production: {
            ...state.dynamo.production,
            energy: ((1 + state.dynamo.level ) * state.dynamo.multi.production * 30) * (1 + action.payload),
          },
        },
        thunder: {
          ...state.thunder,
          production: {
            ...state.thunder.production,
            energy: ((1 + state.thunder.level ) * state.thunder.multi.production * 30) * (1 + action.payload),
          },
        }
      };
    default:
      return state;
  }
}
