import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ChangeEnergy } from './resources.actions';
import { AppState } from '../reducers';

@Injectable()
export class ResourcesEffects {;
  res: any;

  @Effect()
  init$ = interval(1000).pipe(mapTo(new ChangeEnergy(this.productionPerTick())));

  constructor(private actions$: Actions, private store: Store<AppState>) {}

  productionPerTick() {

    return 1;
  }
}
