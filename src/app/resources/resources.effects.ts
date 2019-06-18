import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ChangeEnergy, ResourcesActionTypes, ChangePrice, LastTime } from './resources.actions';
import { AppState } from '../reducers';
import { takeProduction } from './resources.selectors';

@Injectable()
export class ResourcesEffects {
  priceTime = 0;

  @Effect()
  init$ = interval(1000).pipe(mapTo(new ChangeEnergy(this.productionPerTick())));

  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(ResourcesActionTypes.StartType),
    tap(() => {
      interval(60000).subscribe(() => {
        this.store.dispatch(new ChangePrice(this.randomPrice()));
      });
    })
  );

  constructor(private actions$: Actions, private store: Store<AppState>) { }

  productionPerTick(): number {
    let production: number;
    this.store.pipe(select(takeProduction)).subscribe(data => production = data);
    return production;
  }

  randomPrice(): number {
    const rand: number = Number(Math.random() * (0.36 - 0.1) + 0.1);
    return Number(rand.toFixed(2));
  }
}
