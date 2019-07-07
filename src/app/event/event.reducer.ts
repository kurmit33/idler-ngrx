import { Event } from './event.model';
import { EventActions, EventActionTypes, EVENT_TYPES } from './event.actions';


export interface State {
  workEvent: Event;
}

export const initialState: State = {
  workEvent: new Event('noEvent', 0, 'No Event!', EVENT_TYPES.NO),
};

export function reducer(state = initialState, action: EventActions): State {
  switch (action.type) {
    case EventActionTypes.ChangeEventAction:
      return {
        ...state,
        workEvent: action.payload,
      };
    case EventActionTypes.ChangeTimeAction:
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
