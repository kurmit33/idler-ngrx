import { Office } from './office.models';
import { OFFICE_TYPES, OFFICE_ACTION_TYPES, OfficeActions } from './office.actions';


export interface State {
  accumulator: Office;
  bigAccumulator: Office;
  sell: Office;
  bigSell: Office;
  control: Office;
}

export const initialState: State = {
  accumulator: new Office(0, 'Accumulator Room', OFFICE_TYPES.ACCUMULATOR, 'Max energy', 'Accumulators', 'Buy Accumulators', 1),
  // tslint:disable-next-line: max-line-length
  bigAccumulator: new Office(1, 'Big Accumulator Room', OFFICE_TYPES.BIG_ACCUMULATOR, 'Max energy', 'Accumulators', 'Buy Accumulators', 10),
  sell: new Office(2, 'Sell Room', OFFICE_TYPES.SELL, 'Every 10s sell', 'Robots', 'Buy Robots', 3),
  bigSell: new Office(3, 'Big Sell Room', OFFICE_TYPES.BIG_SELL, 'Every 10s sell', 'Robots', 'Buy Robots', 13),
  control: new Office(4, 'Control Room', OFFICE_TYPES.CONTROL, 'Offline 24h, multi', 'PC', 'Buy PC', 15),
};

export function reducer(state = initialState, action: OfficeActions): State {
  switch (action.type) {
    case OFFICE_ACTION_TYPES.LOAD_OFFICES:
      return action.payload;
    case OFFICE_ACTION_TYPES.RESET_OFFICES:
      return initialState;
    case OFFICE_ACTION_TYPES.BUTTONS_OFFICES:
      return {
        ...state,
        accumulator: {
          ...state.accumulator,
          status: {
            ...state.accumulator.status,
            roomButton: action.payload.accu.room,
            toolButton: action.payload.accu.tool,
          }
        },
        bigAccumulator: {
          ...state.bigAccumulator,
          status: {
            ...state.bigAccumulator.status,
            roomButton: action.payload.bigAccu.room,
            toolButton: action.payload.bigAccu.tool,
          }
        },
        sell: {
          ...state.sell,
          status: {
            ...state.sell.status,
            roomButton: action.payload.sell.room,
            toolButton: action.payload.sell.tool,
          }
        },
        bigSell: {
          ...state.bigSell,
          status: {
            ...state.bigSell.status,
            roomButton: action.payload.bigSell.room,
            toolButton: action.payload.bigSell.tool,
          }
        },
        control: {
          ...state.control,
          status: {
            ...state.control.status,
            roomButton: action.payload.control.room,
            toolButton: action.payload.control.tool,
          }
        },
      };
    case OFFICE_ACTION_TYPES.RESEARCH_BUTTON_OFFICES:
      return {
        ...state,
        accumulator: {
          ...state.accumulator,
          status: {
            ...state.accumulator.status,
            researchButton: action.payload.accu,
          }
        },
        bigAccumulator: {
          ...state.bigAccumulator,
          status: {
            ...state.bigAccumulator.status,
            researchButton: action.payload.bigAccu,
          }
        },
        sell: {
          ...state.sell,
          status: {
            ...state.sell.status,
            researchButton: action.payload.sell,
          }
        },
        bigSell: {
          ...state.bigSell,
          status: {
            ...state.bigSell.status,
            researchButton: action.payload.bigSell,
          }
        },
        control: {
          ...state.control,
          status: {
            ...state.control.status,
            researchButton: action.payload.control,
          }
        },
      };
    case OFFICE_ACTION_TYPES.PRICE_OFFICES:
      return {
        ...state,
        accumulator: {
          ...state.accumulator,
          price: {
            ...state.accumulator.price,
            room: action.payload.accu.room,
            secondResources: action.payload.accu.tool,
          }
        },
        bigAccumulator: {
          ...state.bigAccumulator,
          price: {
            ...state.bigAccumulator.price,
            room: action.payload.bigAccu.room,
            secondResources: action.payload.bigAccu.tool,
          }
        },
        sell: {
          ...state.sell,
          price: {
            ...state.sell.price,
            room: action.payload.sell.room,
            secondResources: action.payload.sell.tool,
          }
        },
        bigSell: {
          ...state.bigSell,
          price: {
            ...state.bigSell.price,
            room: action.payload.bigSell.room,
            secondResources: action.payload.bigSell.tool,
          }
        },
        control: {
          ...state.control,
          price: {
            ...state.control.price,
            room: action.payload.control.room,
            secondResources: action.payload.control.tool,
          }
        },
      };
    case OFFICE_ACTION_TYPES.BUY_ROOM_OFFICES:
      switch (action.payload.ind) {
        case OFFICE_TYPES.ACCUMULATOR:
          return {
            ...state,
            accumulator: {
              ...state.accumulator,
              room: state.accumulator.room + action.payload.diff,
              space: (state.accumulator.room + action.payload.diff + 1) * 10,
            }
          };
        case OFFICE_TYPES.BIG_ACCUMULATOR:
          return {
            ...state,
            bigAccumulator: {
              ...state.bigAccumulator,
              room: state.bigAccumulator.room + action.payload.diff,
              space: (state.bigAccumulator.room + action.payload.diff + 1) * 100,
            }
          };
        case OFFICE_TYPES.SELL:
          return {
            ...state,
            sell: {
              ...state.sell,
              room: state.sell.room + action.payload.diff,
              space: (state.sell.room + action.payload.diff + 1) * 10,
            }
          };
        case OFFICE_TYPES.BIG_SELL:
          return {
            ...state,
            bigSell: {
              ...state.bigSell,
              room: state.bigSell.room + action.payload.diff,
              space: (state.bigSell.room + action.payload.diff + 1) * 100,
            }
          };
        case OFFICE_TYPES.CONTROL:
          return {
            ...state,
            control: {
              ...state.control,
              room: state.control.room + action.payload.diff,
              space: (state.control.room + action.payload.diff + 1) * 10,
            }
          };
        default:
          return state;
      }
    case OFFICE_ACTION_TYPES.BUY_TOOL_OFFICES:
      switch (action.payload.ind) {
        case OFFICE_TYPES.ACCUMULATOR:
          return {
            ...state,
            accumulator: {
              ...state.accumulator,
              secondResources: state.accumulator.secondResources + action.payload.diff,
              maxEnergy: (1 + state.accumulator.secondResources + action.payload.diff) * 50,
            }
          };
        case OFFICE_TYPES.BIG_ACCUMULATOR:
          return {
            ...state,
            bigAccumulator: {
              ...state.bigAccumulator,
              secondResources: state.bigAccumulator.secondResources + action.payload.diff,
              maxEnergy: (1 + state.bigAccumulator.secondResources + action.payload.diff) * 5000,
            }
          };
        case OFFICE_TYPES.SELL:
          return {
            ...state,
            sell: {
              ...state.sell,
              secondResources: state.sell.secondResources + action.payload.diff,
              maxEnergy: (1 + state.sell.secondResources + action.payload.diff) * 50,
            }
          };
        case OFFICE_TYPES.BIG_SELL:
          return {
            ...state,
            bigSell: {
              ...state.bigSell,
              secondResources: state.bigSell.secondResources + action.payload.diff,
              maxEnergy: (1 + state.bigSell.secondResources + action.payload.diff) * 5000,
            }
          };
        case OFFICE_TYPES.CONTROL:
          return {
            ...state,
            control: {
              ...state.control,
              secondResources: state.control.secondResources + action.payload.diff,
              maxEnergy: (1 + state.control.secondResources + action.payload.diff) * 0.001,
            }
          };
        default:
          return state;
      }
    case OFFICE_ACTION_TYPES.RESEARCH_OFFICES:
      switch (action.payload) {
        case OFFICE_TYPES.ACCUMULATOR:
          return {
            ...state,
            accumulator: {
              ...state.accumulator,
              status: {
                ...state.accumulator.status,
                research: true,
              }
            }
          };
        case OFFICE_TYPES.BIG_ACCUMULATOR:
          return {
            ...state,
            bigAccumulator: {
              ...state.bigAccumulator,
              status: {
                ...state.bigAccumulator.status,
                research: true,
              }
            }
          };
        case OFFICE_TYPES.SELL:
          return {
            ...state,
            sell: {
              ...state.sell,
              status: {
                ...state.sell.status,
                research: true,
              }
            }
          };
        case OFFICE_TYPES.BIG_SELL:
          return {
            ...state,
            bigSell: {
              ...state.bigSell,
              status: {
                ...state.bigSell.status,
                research: true,
              }
            }
          };
        case OFFICE_TYPES.CONTROL:
          return {
            ...state,
            control: {
              ...state.control,
              status: {
                ...state.control.status,
                research: true,
              }
            }
          };
        default:
          return state;
      }
    case OFFICE_ACTION_TYPES.AUTO_SELL:
      switch (action.payload.ind) {
        case OFFICE_TYPES.SELL:
          return {
            ...state,
            sell: {
              ...state.sell,
              status: {
                ...state.sell.status,
                work: action.payload.diff,
              }
            }
          };
        case OFFICE_TYPES.BIG_SELL:
          return {
            ...state,
            bigSell: {
              ...state.bigSell,
              status: {
                ...state.bigSell.status,
                work: action.payload.diff,
              }
            }
          };
        default:
          return state;
      }
    case OFFICE_ACTION_TYPES.MIN_PRICE:
      switch (action.payload.ind) {
        case OFFICE_TYPES.SELL:
          return {
            ...state,
            sell: {
              ...state.sell,
              minPrice: action.payload.diff,
            }
          };
        case OFFICE_TYPES.BIG_SELL:
          return {
            ...state,
            bigSell: {
              ...state.bigSell,
              minPrice: action.payload.diff,
            }
          };
        default:
          return state;
      }
    case OFFICE_ACTION_TYPES.OFFLINE:
      return {
        ...state,
        control: {
          ...state.control,
          offlineTime: action.payload,
        }
      };
    default:
      return state;
  }
}
