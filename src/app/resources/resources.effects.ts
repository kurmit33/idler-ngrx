import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { timer, defer, interval } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';
import { ChangeMoney, ChangeEnergy } from './resources.actions';


@Injectable()
export class ResourcesEffects {

  @Effect()
  init$ = interval(1000).pipe(mapTo(new ChangeEnergy(this.productionPerTick())));

  constructor(private actions$: Actions) {}

  productionPerTick() {

    return 1;
  }
}
