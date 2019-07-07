import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { State } from './powerplant.reducer';
import { Store, select } from '@ngrx/store';
import {
  POWERPLANT_ACTION_TYPES, Price, ButtonStatus,
  HireButton, ResearchButton, Build, Upgrade, POWERPLANT_TYPES, ProductionPowerPlant, ChangePowerPlantPrice
} from './powerplant.actions';
import { tap } from 'rxjs/operators';
import { takeMoney, takeGreen, takeMulti, takeWorkes } from '../resources/resources.selectors';
import { PowerPlant } from './powerplant.model';
import { takePowerPlants, selectPowerPlant } from './powerplant.selector';
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
      RESOURCES_ACTION_TYPES.MoneyAction, RESOURCES_ACTION_TYPES.SellAction),
    tap(() => {
      const payload = {
        wind: true,
        solar: true,
        wave: true,
        water: true,
        geothermal: true,
        coal: true,
        biogas: true,
        oil: true,
        nuclear: true,
        fusion: true,
      };
      this.arrPP.forEach((powerplant) => {
        let temp: boolean;
        if (powerplant.status.research) {
          return 0;
        } else if (powerplant.price.research.money <= this.money && powerplant.price.research.green <= this.green) {
          temp = false;
        } else {
          temp = true;
        }
        switch (powerplant.type) {
          case POWERPLANT_TYPES.WIND:
            payload.wind = temp;
            break;
          case POWERPLANT_TYPES.SOLAR:
            payload.solar = temp;
            break;
          case POWERPLANT_TYPES.WAVE:
            payload.wave = temp;
            break;
          case POWERPLANT_TYPES.WATER:
            payload.water = temp;
            break;
          case POWERPLANT_TYPES.GEOTHERMAL:
            payload.geothermal = temp;
            break;
          case POWERPLANT_TYPES.COAL:
            payload.coal = temp;
            break;
          case POWERPLANT_TYPES.BIOGAS:
            payload.biogas = temp;
            break;
          case POWERPLANT_TYPES.OIL:
            payload.oil = temp;
            break;
          case POWERPLANT_TYPES.NUCLEAR:
            payload.nuclear = temp;
            break;
          case POWERPLANT_TYPES.FUSION:
            payload.fusion = temp;
            break;
        }
      });
      this.store.dispatch(new ResearchButton(payload));
    })
  );

  @Effect({ dispatch: false })
  hireButtonStatus$ = this.actions$.pipe(
    ofType(POWERPLANT_ACTION_TYPES.Reset, RESOURCES_ACTION_TYPES.StartType,
      RESOURCES_ACTION_TYPES.Workers, RESOURCES_ACTION_TYPES.MultiAction),
    tap(() => {
      const payload = {
        wind: true,
        solar: true,
        wave: true,
        water: true,
        geothermal: true,
        coal: true,
        biogas: true,
        oil: true,
        nuclear: true,
        fusion: true,
      };
      this.arrPP.forEach((powerplant) => {
        let temp: boolean;
        if (this.multi <= this.workers) {
          temp = false;
        } else {
          temp = true;
        }
        switch (powerplant.type) {
          case POWERPLANT_TYPES.WIND:
            payload.wind = temp;
            break;
          case POWERPLANT_TYPES.SOLAR:
            payload.solar = temp;
            break;
          case POWERPLANT_TYPES.WAVE:
            payload.wave = temp;
            break;
          case POWERPLANT_TYPES.WATER:
            payload.water = temp;
            break;
          case POWERPLANT_TYPES.GEOTHERMAL:
            payload.geothermal = temp;
            break;
          case POWERPLANT_TYPES.COAL:
            payload.coal = temp;
            break;
          case POWERPLANT_TYPES.BIOGAS:
            payload.biogas = temp;
            break;
          case POWERPLANT_TYPES.OIL:
            payload.oil = temp;
            break;
          case POWERPLANT_TYPES.NUCLEAR:
            payload.nuclear = temp;
            break;
          case POWERPLANT_TYPES.FUSION:
            payload.fusion = temp;
            break;
        }
      });
      this.store.dispatch(new HireButton(payload));
    })
  );

  @Effect({ dispatch: false })
  buttonStatus$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.SellAction, RESOURCES_ACTION_TYPES.MoneyAction, POWERPLANT_ACTION_TYPES.PriceAction,
    ),
    tap(() => {
      const payload = {
        wind: {
          build: true,
          upg: true,
        },
        solar: {
          build: true,
          upg: true,
        },
        wave: {
          build: true,
          upg: true,
        },
        water: {
          build: true,
          upg: true,
        },
        geothermal: {
          build: true,
          upg: true,
        },
        coal: {
          build: true,
          upg: true,
        },
        biogas: {
          build: true,
          upg: true,
        },
        oil: {
          build: true,
          upg: true,
        },
        nuclear: {
          build: true,
          upg: true,
        },
        fusion: {
          build: true,
          upg: true,
        },
      };
      this.arrPP.forEach((powerplant) => {
        let buildTemp: boolean;
        let upgTemp: boolean;
        if (
          powerplant.price.build.money <= this.money
          && powerplant.space - powerplant.buildings >= this.multi
          && (powerplant.price.build.green <= this.green || powerplant.price.build.green === 0)) {
          buildTemp = false;
        } else {
          buildTemp = true;
        }
        if (powerplant.price.upgrade.money <= this.money
          && (powerplant.price.upgrade.green <= this.green || powerplant.price.upgrade.green === 0)) {
          upgTemp = false;
        } else {
          upgTemp = true;
        }
        switch (powerplant.type) {
          case POWERPLANT_TYPES.WIND:
            payload.wind.build = buildTemp;
            payload.wind.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.SOLAR:
            payload.solar.build = buildTemp;
            payload.solar.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.WAVE:
            payload.wave.build = buildTemp;
            payload.wave.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.WATER:
            payload.water.build = buildTemp;
            payload.water.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.GEOTHERMAL:
            payload.geothermal.build = buildTemp;
            payload.geothermal.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.COAL:
            payload.coal.build = buildTemp;
            payload.coal.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.BIOGAS:
            payload.biogas.build = buildTemp;
            payload.biogas.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.OIL:
            payload.oil.build = buildTemp;
            payload.oil.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.NUCLEAR:
            payload.nuclear.build = buildTemp;
            payload.nuclear.upg = upgTemp;
            break;
          case POWERPLANT_TYPES.FUSION:
            payload.fusion.build = buildTemp;
            payload.fusion.upg = upgTemp;
            break;
        }
      });
      this.store.dispatch(new ButtonStatus(payload));
    })
  );

  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.MultiAction, RESOURCES_ACTION_TYPES.StartType, POWERPLANT_ACTION_TYPES.Reset),
    tap(() => {
      const payload = {
        wind: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        solar: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        wave: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        water: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        geothermal: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        coal: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        biogas: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        oil: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        nuclear: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
        fusion: {
          build: {
            money: 0,
            green: 0,
          },
          upgrade: {
            money: 0,
            green: 0,
          },
        },
      };
      this.arrPP.forEach((powerPlant) => {
        let buildGreenPrice: number;
        let upgradeGreenPrice: number;
        const buildMoneyPrice =
          ((powerPlant.multi.build.money *
            (7 * (powerPlant.buildings + this.multi) + 3 * Math.pow(powerPlant.buildings + this.multi, 2))) / 2)
          - ((powerPlant.multi.build.money * (7 * powerPlant.buildings + 3 * Math.pow(powerPlant.buildings, 2))) / 2);
        const upgradeMoneyPrice =
          (powerPlant.multi.upgrade.money * ((1 - Math.pow(2, powerPlant.level + this.multi)) * (-1)))
          - (powerPlant.multi.upgrade.money * ((1 - Math.pow(2, powerPlant.level)) * (-1)));
        if (powerPlant.startPrice.green) {
          buildGreenPrice = this.multi * (powerPlant.buildings + 1) * powerPlant.multi.build.green;
          upgradeGreenPrice = this.multi * (powerPlant.level + 1) * powerPlant.multi.upgrade.green;
        }
        switch (powerPlant.type) {
          case POWERPLANT_TYPES.WIND:
            payload.wind.build.money = buildMoneyPrice;
            payload.wind.upgrade.money = upgradeMoneyPrice;
            break;
          case POWERPLANT_TYPES.SOLAR:
            payload.solar.build.money = buildMoneyPrice;
            payload.solar.upgrade.money = upgradeMoneyPrice;
            break;
          case POWERPLANT_TYPES.WAVE:
            payload.wave.build.money = buildMoneyPrice;
            payload.wave.upgrade.money = upgradeMoneyPrice;
            break;
          case POWERPLANT_TYPES.WATER:
            payload.water.build.money = buildMoneyPrice;
            payload.water.upgrade.money = upgradeMoneyPrice;
            break;
          case POWERPLANT_TYPES.GEOTHERMAL:
            payload.geothermal.build.money = buildMoneyPrice;
            payload.geothermal.upgrade.money = upgradeMoneyPrice;
            break;
          case POWERPLANT_TYPES.COAL:
            payload.coal.build.money = buildMoneyPrice;
            payload.coal.build.green = buildGreenPrice;
            payload.coal.upgrade.money = upgradeMoneyPrice;
            payload.coal.upgrade.green = upgradeGreenPrice;
            break;
          case POWERPLANT_TYPES.BIOGAS:
            payload.biogas.build.money = buildMoneyPrice;
            payload.biogas.build.green = buildGreenPrice;
            payload.biogas.upgrade.money = upgradeMoneyPrice;
            payload.biogas.upgrade.green = upgradeGreenPrice;
            break;
          case POWERPLANT_TYPES.OIL:
            payload.oil.build.money = buildMoneyPrice;
            payload.oil.build.green = buildGreenPrice;
            payload.oil.upgrade.money = upgradeMoneyPrice;
            payload.oil.upgrade.green = upgradeGreenPrice;
            break;
          case POWERPLANT_TYPES.NUCLEAR:
            payload.nuclear.build.money = buildMoneyPrice;
            payload.nuclear.build.green = buildGreenPrice;
            payload.nuclear.upgrade.money = upgradeMoneyPrice;
            payload.nuclear.upgrade.green = upgradeGreenPrice;
            break;
          case POWERPLANT_TYPES.FUSION:
            payload.fusion.build.money = buildMoneyPrice;
            payload.fusion.build.green = buildGreenPrice;
            payload.fusion.upgrade.money = upgradeMoneyPrice;
            payload.fusion.upgrade.green = upgradeGreenPrice;
            break;
        }
      });
      this.store.dispatch(new Price(payload));
    }));

  @Effect({ dispatch: false })
  changeProduction$ = this.actions$.pipe(
    ofType<Build | Upgrade>(POWERPLANT_ACTION_TYPES.BuildPowerPlants, POWERPLANT_ACTION_TYPES.UpgradePowerPlants),
    tap((action) => {
      let powerPlant: PowerPlant;
      const sub = this.store.pipe(select(selectPowerPlant, action.payload.ind)).subscribe(data => powerPlant = data);
      const temp = powerPlant.buildings * powerPlant.multi.production.energy * (powerPlant.level + 1);
      const tempProduction = temp + (temp * powerPlant.engineers * 0.02) + (temp * this.workers * 0.002);
      this.store.dispatch(new ProductionPowerPlant({ ind: powerPlant.type, diff: tempProduction }));
      sub.unsubscribe();
    })
  );

  @Effect({ dispatch: false })
  changePowerPrice$ = this.actions$.pipe(
    ofType<Build | Upgrade>(POWERPLANT_ACTION_TYPES.BuildPowerPlants, POWERPLANT_ACTION_TYPES.UpgradePowerPlants),
    tap((action) => {
      let powerPlant: PowerPlant;
      const sub = this.store.pipe(select(selectPowerPlant, action.payload.ind)).subscribe(data => powerPlant = data);
      const payload = {
        ind: powerPlant.type,
        build: {
          money: (((powerPlant.multi.build.money * (7 * (powerPlant.buildings + this.multi)
            + 3 * Math.pow(powerPlant.buildings + this.multi, 2))) / 2)
            - ((powerPlant.multi.build.money * (7 * powerPlant.buildings + 3 * Math.pow(powerPlant.buildings, 2))) / 2)),
          green: 0,
        },
        upgrade: {
          money: ((powerPlant.multi.upgrade.money * ((1 - Math.pow(2, powerPlant.level + this.multi)) * (-1)))
            - (powerPlant.multi.upgrade.money * ((1 - Math.pow(2, powerPlant.level)) * (-1)))),
          green: 0,
        }
      };
      if (powerPlant.startPrice.green) {
        payload.build.green = this.multi * (powerPlant.buildings + 1) * powerPlant.multi.build.green;
        payload.upgrade.green = this.multi * (powerPlant.level + 1) * powerPlant.multi.upgrade.green;
      }
      this.store.dispatch(new ChangePowerPlantPrice(payload));
      sub.unsubscribe();
    })
  );
}


