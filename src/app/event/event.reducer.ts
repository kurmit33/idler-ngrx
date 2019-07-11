
import { EventActions, EVENT_TYPES, EVENT_ACTION_TYPES } from './event.actions';
import { GameEvent } from './event.model';


export interface State {
  workEvent: GameEvent;
}

export const initialState: State = {
  workEvent: new GameEvent('noEvent', 0, 'No Event!', EVENT_TYPES.NO),
};

export function reducer(state = initialState, action: EventActions): State {
  switch (action.type) {
    case EVENT_ACTION_TYPES.LOAD_EVENT:
      return action.payload;
    case EVENT_ACTION_TYPES.CHANGE_EVENT:
      return {
        ...state,
        workEvent: action.payload,
      };
    case EVENT_ACTION_TYPES.CHANGE_TIME:
      return {
        ...state,
        workEvent: {
          ...state.workEvent,
          workTime: action.payload,
        }
      };
    default:
      return state;
  }
}
