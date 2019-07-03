import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  PRODUCTION_ACTION_TYPES, Work, Upgrade,
  ProdPrice, ButtonChange, ResearchButtonStatus
} from './production.actions';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { ChangeEnergy, RESOURCES_ACTION_TYPES } from '../resources/resources.actions';
import { takeProductionObj } from './production.selectors';
import { ProductionAction } from './production.model';
import { takeMulti, takeMoney } from '../resources/resources.selectors';



@Injectable()
export class ProductionEffects {
  arrProd: ProductionAction[];
  multi: number;
  money: number;
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
  }

  @Effect({ dispatch: false })
  works$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.StartType),
    tap(() => {
      interval(1000).subscribe(() => {
        this.arrProd.forEach((prod) => {
          if (prod.status.work) {
            if (prod.time >= prod.production.time) {
              prod.time = 0;
              const payload = {
                ind: prod.type,
                diff: false,
              };
              this.store.dispatch(new ChangeEnergy(prod.production.energy));
              this.store.dispatch(new Work(payload));
            } else {
              prod.time++;
            }
          }
        });
      });
    })
  );


  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.MultiAction, PRODUCTION_ACTION_TYPES.UpgradeAction,
      RESOURCES_ACTION_TYPES.StartType, PRODUCTION_ACTION_TYPES.Reset, PRODUCTION_ACTION_TYPES.BuyAction
    ),
    tap(() => {
      this.arrProd.forEach((prod) => {
        const upgradePrice =
          ((prod.multi.upgrade * (7 * (prod.level + this.multi) + 3 * Math.pow(prod.level + this.multi, 2))) / 2)
          - ((prod.multi.upgrade * (7 * prod.level + 3 * Math.pow(prod.level, 2))) / 2);
        const timePrice = ((10 * prod.multi.upgrade * (7 * (prod.timeResources + this.multi)
          + 3 * Math.pow(prod.timeResources + this.multi, 2))) / 2)
          - ((10 * prod.multi.upgrade * (7 * prod.timeResources + 3 * Math.pow(prod.timeResources, 2))) / 2);
        const payload = {
          ind: prod.type,
          diffUpg: upgradePrice,
          diffTime: timePrice,
        };
        this.store.dispatch(new ProdPrice(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  buttonStatus$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.MoneyAction, RESOURCES_ACTION_TYPES.SellAction,
      PRODUCTION_ACTION_TYPES.PriceAction, PRODUCTION_ACTION_TYPES.WorkTime
    ),
    tap(() => {
      this.arrProd.forEach((prod) => {
        const payload = {
          ind: prod.type,
          diffUpg: true,
          diffTime: true,
        };
        if (prod.price.upgrade <= this.money && !prod.status.work) {
          payload.diffUpg = false;
        } else {
          payload.diffUpg = true;
        }
        if (prod.price.timeResource <= this.money && prod.space - (prod.timeResources + this.multi) >= 0  && !prod.status.work) {
          payload.diffTime = false;
        } else {
          payload.diffTime = true;
        }
        this.store.dispatch(new ButtonChange(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  researchButtonStatus$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.MoneyAction, RESOURCES_ACTION_TYPES.SellAction,
      RESOURCES_ACTION_TYPES.StartType, PRODUCTION_ACTION_TYPES.Reset),
    tap(() => {
      this.arrProd.forEach((prod) => {
        const payload = {
          ind: prod.type,
          diff: true,
        };
        if (prod.price.research <= this.money) {
          payload.diff = false;
        } else {
          payload.diff = true;
        }
        this.store.dispatch(new ResearchButtonStatus(payload));
      });
    })
  );
}
