import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromResources from '../resources/resources.reducer';
import * as fromPowerplant from '../powerplant/powerplant.reducer';
import * as fromOffice from '../office/office.reducer';
import * as fromEvent from '../event/event.reducer';
import * as fromProduction from '../production/production.reducer';

export interface AppState {
  resources: fromResources.State;
  powerplant: fromPowerplant.State;
  office: fromOffice.State;
  event: fromEvent.State;
  production: fromProduction.State;
}

export const reducers: ActionReducerMap<AppState> = {
  resources: fromResources.reducer,
  powerplant: fromPowerplant.reducer,
  office: fromOffice.reducer,
  event: fromEvent.reducer,
  production: fromProduction.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
