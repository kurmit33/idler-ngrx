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
    case PRODUCTION_ACTION_TYPES.LoadProductions:
      return action.payload;
    case PRODUCTION_ACTION_TYPES.Reset:
      return initialState;
    case PRODUCTION_ACTION_TYPES.WorkTime:
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
    case PRODUCTION_ACTION_TYPES.ResearchAction:
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
    case PRODUCTION_ACTION_TYPES.ButtonStatusAction:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              status: {
                ...state.cell.status,
                upgradeButton: action.payload.diffUpg,
                timeResourceButton: action.payload.diffTime,
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
                upgradeButton: action.payload.diffUpg,
                timeResourceButton: action.payload.diffTime,
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
                upgradeButton: action.payload.diffUpg,
                timeResourceButton: action.payload.diffTime,
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
                upgradeButton: action.payload.diffUpg,
                timeResourceButton: action.payload.diffTime,
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
                upgradeButton: action.payload.diffUpg,
                timeResourceButton: action.payload.diffTime,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.ResearchButtonStatusAction:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              status: {
                ...state.cell.status,
                researchButton: action.payload.diff,
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
                researchButton: action.payload.diff,
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
                researchButton: action.payload.diff,
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
                researchButton: action.payload.diff,
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
                researchButton: action.payload.diff,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.PriceAction:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              price: {
                ...state.cell.price,
                upgrade: action.payload.diffUpg,
                timeResource: action.payload.diffTime,
              }
            }
          };
        case PRODUCTION_TYPES.BUCKET:
          return {
            ...state,
            bucket: {
              ...state.bucket,
              price: {
                ...state.bucket.price,
                upgrade: action.payload.diffUpg,
                timeResource: action.payload.diffTime,
              }
            }
          };
        case PRODUCTION_TYPES.HAMSTER:
          return {
            ...state,
            hamster: {
              ...state.hamster,
              price: {
                ...state.hamster.price,
                upgrade: action.payload.diffUpg,
                timeResource: action.payload.diffTime,
              }
            }
          };
        case PRODUCTION_TYPES.DYNAMO:
          return {
            ...state,
            dynamo: {
              ...state.dynamo,
              price: {
                ...state.dynamo.price,
                upgrade: action.payload.diffUpg,
                timeResource: action.payload.diffTime,
              }
            }
          };
        case PRODUCTION_TYPES.THUNDER:
          return {
            ...state,
            thunder: {
              ...state.thunder,
              price: {
                ...state.thunder.price,
                upgrade: action.payload.diffUpg,
                timeResource: action.payload.diffTime,
              }
            }
          };
        default:
          return state;
      }
    case PRODUCTION_ACTION_TYPES.BuyAction:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              timeResources: state.cell.timeResources + action.payload.diff,
              production: {
                ...state.cell.production,
                time: state.cell.production.startTime - ((action.payload.diff + state.cell.timeResources) * 1),
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
    case PRODUCTION_ACTION_TYPES.UpgradeAction:
      switch (action.payload.ind) {
        case PRODUCTION_TYPES.CELL:
          return {
            ...state,
            cell: {
              ...state.cell,
              level: state.cell.level + action.payload.diff,
              production: {
                ...state.cell.production,
                energy: (1 + state.cell.level + action.payload.diff) * state.cell.multi.production,
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
                energy: (1 + state.bucket.level + action.payload.diff) * state.bucket.multi.production,
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
                energy: (1 + state.hamster.level + action.payload.diff) * state.hamster.multi.production,
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
                energy: (1 + state.dynamo.level + action.payload.diff) * state.dynamo.multi.production,
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
                energy: (1 + state.thunder.level + action.payload.diff) * state.thunder.multi.production,
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
