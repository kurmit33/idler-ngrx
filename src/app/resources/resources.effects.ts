import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeEnergy, RESOURCES_ACTION_TYPES, ChangePrice, ChangeProduction, ChangeBuildings } from './resources.actions';
import { AppState } from '../reducers';
import { takeProduction } from './resources.selectors';
import { POWERPLANT_ACTION_TYPES } from '../powerplant/powerplant.actions';
import { takePowerPlants } from '../powerplant/powerplant.selector';
import { PowerPlant } from '../powerplant/powerplant.model';
import { EVENT_ACTION_TYPES } from '../event/event.actions';


@Injectable()
export class ResourcesEffects {
  priceTime = 0;
  arrPP: PowerPlant[];

  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.store.pipe(select(takePowerPlants)).subscribe(data => {
      this.arrPP = [
        data.wind,
        data.solar,
        data.wave,
        data.water,
        data.geothermal,
        data.coal,
        data.biogas,
        data.oil,
        data.nuclear,
        data.fusion,
      ];
    });
  }

  @Effect({ dispatch: false })
  works$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.START_GAME),
    tap(() => {
      interval(250).subscribe(() => {
        this.store.dispatch(new ChangeEnergy(this.productionPerTick()));
      });
      interval(60000).subscribe(() => {
        this.store.dispatch(new ChangePrice(this.randomPrice()));
      });
    })
  );

  @Effect({dispatch: false})
  production$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.PRODUCTION_POWERPLANT, EVENT_ACTION_TYPES.CHANGE_EVENT),
    tap(() => {
      let prod = 0;
      this.arrPP.forEach((power) => {
          prod += power.production;
      });
      this.store.dispatch(new ChangeProduction(prod));
    })
  );

  @Effect({dispatch: false})
  buildings$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.BUILD_POWERPLANT),
    tap(() => {
      let buildings = 0;
      this.arrPP.forEach((power) => {
        buildings += power.buildings;
      });
      this.store.dispatch(new ChangeBuildings(buildings));
    })
  );

  productionPerTick(): number {
    let production: number;
    const sub = this.store.pipe(select(takeProduction)).subscribe(data => production = data);
    sub.unsubscribe();
    return production;
  }

  randomPrice(): number {
    const rand: number = Number(Math.random() * (0.36 - 0.1) + 0.1);
    return Number(rand.toFixed(2));
  }
}
