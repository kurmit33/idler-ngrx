import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { interval } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { ChangeEnergy, RESOURCES_ACTION_TYPES, ChangePrice, LastTime, ChangeProduction, ChangeBuildings } from './resources.actions';
import { AppState } from '../reducers';
import { takeProduction } from './resources.selectors';
import { POWERPLANT_ACTION_TYPES, Production } from '../powerplant/powerplant.actions';
import { takePowerPlants } from '../powerplant/powerplant.selector';
import { PowerPlant } from '../powerplant/powerplant.model';

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
  changePrice$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.StartType),
    tap(() => {
      interval(1000).subscribe(() => {
        this.store.dispatch(new ChangeEnergy(this.productionPerTick()));
      });
      interval(60000).subscribe(() => {
        this.store.dispatch(new ChangePrice(this.randomPrice()));
      });
    })
  );

  @Effect({dispatch: false})
  production$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.ProductionAction),
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
    ofType(POWERPLANT_ACTION_TYPES.BuildPowerPlants),
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
    this.store.pipe(select(takeProduction)).subscribe(data => production = data);
    return production;
  }

  randomPrice(): number {
    const rand: number = Number(Math.random() * (0.36 - 0.1) + 0.1);
    return Number(rand.toFixed(2));
  }
}
