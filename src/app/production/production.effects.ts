import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  PRODUCTION_ACTION_TYPES, PRODUCTION_TYPES, WorkProductions, PriceProductions,
  TimeProductions, ButtonsProductions, ButtonResearchProductions
} from './production.actions';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { ChangeEnergy, RESOURCES_ACTION_TYPES } from '../resources/resources.actions';
import { takeProductionObj } from './production.selectors';
import { ProductionAction } from './production.model';
import { takeMulti, takeMoney, takeEnergy } from '../resources/resources.selectors';
import { takeOffice } from '../office/office.selectors';

@Injectable()
export class ProductionEffects {
  arrProd: ProductionAction[];
  multi: number;
  money: number;
  energy: number;
  maxEnergy: number;
  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.store.pipe(select(takeProductionObj)).subscribe(data => {
      this.arrProd = [
        data.cell,
        data.bucket,
        data.hamster,
        data.dynamo,
        data.thunder,
      ];
    });
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takeEnergy)).subscribe(data => this.energy = data);
    this.store.pipe(select(takeOffice)).subscribe(data => {
      this.maxEnergy = data.accumulator.maxEnergy + data.bigAccumulator.maxEnergy;
    });
  }

  @Effect({ dispatch: false })
  work$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.START_GAME),
    tap(() => {
      interval(250).subscribe(() => {
        const time = {
          cell: 0,
          bucket: 0,
          hamster: 0,
          dynamo: 0,
          thunder: 0,
        };
        this.arrProd.forEach((prod) => {
          if (prod.status.work) {
            if (prod.time >= prod.production.time) {
              let temp: number;
              if (prod.production.energy + this.energy > this.maxEnergy) {
                temp = this.maxEnergy - this.energy;
              } else {
                temp = prod.production.energy;
              }
              this.store.dispatch(new ChangeEnergy(temp));
              this.store.dispatch(new WorkProductions({ ind: prod.type, diff: false }));
            } else {
              switch (prod.type) {
                case PRODUCTION_TYPES.CELL:
                  time.cell = prod.time + 1;
                  break;
                case PRODUCTION_TYPES.BUCKET:
                  time.bucket = prod.time + 1;
                  break;
                case PRODUCTION_TYPES.HAMSTER:
                  time.hamster = prod.time + 1;
                  break;
                case PRODUCTION_TYPES.DYNAMO:
                  time.dynamo = prod.time + 1;
                  break;
                case PRODUCTION_TYPES.THUNDER:
                  time.thunder = prod.time + 1;
                  break;
              }
            }
          }
        });
        this.store.dispatch(new TimeProductions(time));
      });
    })
  );


  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.CHANGE_MULTI, PRODUCTION_ACTION_TYPES.UPGRADE_PRODUCTIONS,
      RESOURCES_ACTION_TYPES.START_GAME, PRODUCTION_ACTION_TYPES.RESET_PRODUCTIONS, PRODUCTION_ACTION_TYPES.BUY_PRODUCTIONS
    ),
    tap(() => {
      const payload = {
        cell: {
          diffUpg: 0,
          diffTime: 0,
        },
        bucket: {
          diffUpg: 0,
          diffTime: 0,
        },
        hamster: {
          diffUpg: 0,
          diffTime: 0,
        },
        dynamo: {
          diffUpg: 0,
          diffTime: 0,
        },
        thunder: {
          diffUpg: 0,
          diffTime: 0,
        },

      };
      this.arrProd.forEach((prod) => {
        const upgradePrice =
          ((prod.multi.upgrade * (7 * (prod.level + this.multi) + 3 * Math.pow(prod.level + this.multi, 2))) / 2)
          - ((prod.multi.upgrade * (7 * prod.level + 3 * Math.pow(prod.level, 2))) / 2);
        const timePrice = ((10 * prod.multi.upgrade * (7 * (prod.timeResources + this.multi)
          + 3 * Math.pow(prod.timeResources + this.multi, 2))) / 2)
          - ((10 * prod.multi.upgrade * (7 * prod.timeResources + 3 * Math.pow(prod.timeResources, 2))) / 2);
        switch (prod.type) {
          case PRODUCTION_TYPES.CELL:
            payload.cell.diffUpg = upgradePrice;
            payload.cell.diffTime = timePrice;
            break;
          case PRODUCTION_TYPES.BUCKET:
            payload.bucket.diffUpg = upgradePrice;
            payload.bucket.diffTime = timePrice;
            break;
          case PRODUCTION_TYPES.HAMSTER:
            payload.hamster.diffUpg = upgradePrice;
            payload.hamster.diffTime = timePrice;
            break;
          case PRODUCTION_TYPES.DYNAMO:
            payload.dynamo.diffUpg = upgradePrice;
            payload.dynamo.diffTime = timePrice;
            break;
          case PRODUCTION_TYPES.THUNDER:
            payload.thunder.diffUpg = upgradePrice;
            payload.thunder.diffTime = timePrice;
            break;
        }
      });
      this.store.dispatch(new PriceProductions(payload));
    })
  );

  @Effect({ dispatch: false })
  buttonStatus$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.CHANGE_MONEY, PRODUCTION_ACTION_TYPES.PRICE_PRODUCTIONS, PRODUCTION_ACTION_TYPES.WORK_PRODUCTIONS
    ),
    tap(() => {
      const payload = {
        cell: {
          upg: true,
          time: true,
        },
        bucket: {
          upg: true,
          time: true,
        },
        hamster: {
          upg: true,
          time: true,
        },
        dynamo: {
          upg: true,
          time: true,
        },
        thunder: {
          upg: true,
          time: true,
        },
      };
      this.arrProd.forEach((prod) => {
        let upg = true;
        let time = true;
        if (prod.price.upgrade <= this.money && !prod.status.work) {
          upg = false;
        }
        if (prod.price.timeResource <= this.money && prod.space - (prod.timeResources + this.multi) >= 0 && !prod.status.work) {
          time = false;
        }
        switch (prod.type) {
          case PRODUCTION_TYPES.CELL:
            payload.cell.upg = upg;
            payload.cell.time = time;
            break;
          case PRODUCTION_TYPES.BUCKET:
            payload.bucket.upg = upg;
            payload.bucket.time = time;
            break;
          case PRODUCTION_TYPES.HAMSTER:
            payload.hamster.upg = upg;
            payload.hamster.time = time;
            break;
          case PRODUCTION_TYPES.DYNAMO:
            payload.dynamo.upg = upg;
            payload.dynamo.time = time;
            break;
          case PRODUCTION_TYPES.THUNDER:
            payload.thunder.upg = upg;
            payload.thunder.time = time;
            break;
        }
      });
      this.store.dispatch(new ButtonsProductions(payload));
    })
  );

  @Effect({ dispatch: false })
  researchButtonStatus$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.CHANGE_MONEY, RESOURCES_ACTION_TYPES.START_GAME, PRODUCTION_ACTION_TYPES.RESET_PRODUCTIONS),
    tap(() => {
      const payload = {
        cell: true,
        bucket: true,
        hamster: true,
        dynamo: true,
        thunder: true,
      };
      this.arrProd.forEach((prod) => {
        let temp: boolean;
        if (prod.price.research <= this.money) {
          temp = false;
        } else {
          temp = true;
        }
        switch (prod.type) {
          case PRODUCTION_TYPES.CELL:
            payload.cell = temp;
            break;
          case PRODUCTION_TYPES.BUCKET:
            payload.bucket = temp;
            break;
          case PRODUCTION_TYPES.HAMSTER:
            payload.hamster = temp;
            break;
          case PRODUCTION_TYPES.DYNAMO:
            payload.dynamo = temp;
            break;
          case PRODUCTION_TYPES.THUNDER:
            payload.thunder = temp;
            break;
        }
      });
      this.store.dispatch(new ButtonResearchProductions(payload));
    })
  );
}
