import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { interval, of } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ChangeEnergy, SetResources} from './resources.actions';
import { Load, AppActionTypes, Unload } from '../app.actions';
import { ResourcesState } from './resources.reducer';


@Injectable()
export class ResourcesEffects {

  @Effect()
  init$ = interval(1000).pipe(mapTo(new ChangeEnergy(this.productionPerTick())));

  @Effect({dispatch: false})
  saveResources$ = this.actions$.pipe(
    ofType<Unload>(AppActionTypes.UnloadAction),
    tap(action => {
      localStorage.setItem('resources', JSON.stringify(this.store));
    })
  );

  @Effect()
  loadResources$ = this.actions$.pipe(
    ofType<Load>(AppActionTypes.LoadAction),
    tap(action => {
      const resources = localStorage.getItem('resources');
      if (resources) {
        return of(new SetResources(JSON.parse(resources)));
      }
    })
  );

  constructor(private actions$: Actions, private store: Store<ResourcesState>) {}

  productionPerTick() {

    return 1;
  }
}
