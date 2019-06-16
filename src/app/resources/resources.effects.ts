import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ChangeEnergy, ResourcesActionTypes, ChangePrice, PriceTime } from './resources.actions';
import { AppState } from '../reducers';
import { takeResources } from './resources.selectors';

@Injectable()
export class ResourcesEffects {
  res: any;
  res$: Observable<any>;
  priceTime = 0;

  @Effect()
  init$ = interval(1000).pipe(mapTo(new ChangeEnergy(this.productionPerTick())));

  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(ResourcesActionTypes.SetAction),
    tap(() => {
      interval(5000).subscribe(() => {
        this.res$.subscribe(data => this.res = data);
        localStorage.setItem('game', JSON.stringify(this.res));
      });
    })
  );

  @Effect({dispatch: false})
  changePrice$ = this.actions$.pipe(
    ofType(ResourcesActionTypes.StartType),
    tap(() => {
      interval(1000).subscribe(() => {
        if (this.priceTime >= 59) {
          this.priceTime = 0;
          this.store.dispatch(new ChangePrice(0.3));
        } else {
          this.priceTime++;
          this.store.dispatch(new PriceTime(this.priceTime));
        }
      });
    })
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.res$ = this.store.select(takeResources);
  }

  productionPerTick() {

    return 1;
  }
}
