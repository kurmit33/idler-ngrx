import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { State } from './powerplant.reducer';
import { Store, select } from '@ngrx/store';
import { POWERPLANT_ACTION_TYPES, Price, ButtonStatus, Production, HireButton, ResearchButton } from './powerplant.actions';
import { tap } from 'rxjs/operators';
import { takeMoney, takeGreen, takeMulti, takeWorkes } from '../resources/resources.selectors';
import { PowerPlant } from './powerplant.model';
import { takePowerPlants } from './powerplant.selector';
import { RESOURCES_ACTION_TYPES } from '../resources/resources.actions';


@Injectable()
export class PowerplantEffects {
  money: number;
  green: number;
  multi: number;
  workers: number;
  arrPP: PowerPlant[];

  constructor(private actions$: Actions, private store: Store<State>) {
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takeGreen)).subscribe(data => this.green = data);
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeWorkes)).subscribe(data => this.workers = data);
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
  researchButtonStatus$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.Reset, RESOURCES_ACTION_TYPES.StartType,
      RESOURCES_ACTION_TYPES.MoneyAction, RESOURCES_ACTION_TYPES.SellAction, RESOURCES_ACTION_TYPES.GreenAction),
    tap(() => {
      this.arrPP.forEach((powerplant) => {
        const payload = {
          ind: powerplant.type,
          diff: true,
        };
        if (powerplant.price.research.money <= this.money && powerplant.price.research.green <= this.green) {
          payload.diff = false;
        } else {
          payload.diff = true;
        }
        this.store.dispatch(new ResearchButton(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  hireButtonStatus$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.Reset, RESOURCES_ACTION_TYPES.StartType,
      RESOURCES_ACTION_TYPES.Workers, RESOURCES_ACTION_TYPES.MultiAction),
    tap(() => {
      this.arrPP.forEach((powerplant) => {
        const payload = {
          ind: powerplant.type,
          diff: true,
        };
        if (this.multi <= this.workers) {
          payload.diff = false;
        } else {
          payload.diff = true;
        }
        this.store.dispatch(new HireButton(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  buttonStatus$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.MoneyAction, RESOURCES_ACTION_TYPES.SellAction, RESOURCES_ACTION_TYPES.GreenAction,
      POWERPLANT_ACTION_TYPES.PriceAction, POWERPLANT_ACTION_TYPES.HirePowerPlants, RESOURCES_ACTION_TYPES.Workers,
    ),
    tap(() => {
      this.arrPP.forEach((power) => {
        const payload = {
          ind: power.type,
          build: true,
          upg: true,
        };
        if (
          power.price.build.money <= this.money
          && power.space - power.buildings >= this.multi
          && (power.price.build.green <= this.green || power.price.build.green === 0)) {
          payload.build = false;
        } else {
          payload.build = true;
        }
        if (power.price.upgrade.money <= this.money && (power.price.upgrade.green <= this.green || power.price.upgrade.green === 0)) {
          payload.upg = false;
        } else {
          payload.upg = true;
        }
        this.store.dispatch(new ButtonStatus(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.MultiAction, POWERPLANT_ACTION_TYPES.BuildPowerPlants,
      POWERPLANT_ACTION_TYPES.UpgradePowerPlants, RESOURCES_ACTION_TYPES.StartType,
      POWERPLANT_ACTION_TYPES.Reset
    ),
    tap(() => {
      this.arrPP.forEach((power) => {
        const buildMoneyPrice =
          ((power.multi.build * (7 * (power.buildings + this.multi) + 3 * Math.pow(power.buildings + this.multi, 2))) / 2)
          - ((power.multi.build * (7 * power.buildings + 3 * Math.pow(power.buildings, 2))) / 2);
        const upgradeMoneyPrice =
          (power.multi.upgrade * ((1 - Math.pow(2, power.level + this.multi)) * (-1)))
          - (power.multi.upgrade * ((1 - Math.pow(2, power.level)) * (-1)));
        let buildGreenPrice = 0;
        let upgradeGreenPrice = 0;
        if (power.startPrice.green) {
          buildGreenPrice = 0;
          upgradeGreenPrice = 0;
        }
        const payload = {
          ind: power.type,
          diffMoney: buildMoneyPrice,
          diffGreen: buildGreenPrice,
          diffMoneyUpgrade: upgradeMoneyPrice,
          diffGreenUpgrade: upgradeGreenPrice,
        };
        this.store.dispatch(new Price(payload));
      });
    }));

  @Effect({ dispatch: false })
  changeProduction$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.BuildPowerPlants, POWERPLANT_ACTION_TYPES.UpgradePowerPlants, RESOURCES_ACTION_TYPES.StartType),
    tap(() => {
      this.arrPP.forEach((power) => {
        let production: number;
        const temp = power.buildings * power.multi.production.energy * (power.level + 1);
        production = temp + (temp * power.engineers * 0.02) + (temp * this.workers * 0.002);
        const payload = {
          ind: power.type,
          diff: production,
        };
        this.store.dispatch(new Production(payload));
      });
    })
  );
}


