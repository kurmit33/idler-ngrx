import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromResources from '../resources/resources.reducer';

export interface AppState {
  resources: fromResources.ResourcesState;
}

export const reducers: ActionReducerMap<AppState> = {
  resources: fromResources.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
