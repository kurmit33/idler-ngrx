import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { takeMulti, takeMoney, takePrice, takeEnergy } from '../resources/resources.selectors';
import { AppState } from '../reducers';
import { takeOffice } from './office.selectors';
import { Office } from './office.models';
import { RESOURCES_ACTION_TYPES, ChangeEnergy, ChangeMoney } from '../resources/resources.actions';
import { OFFICE_ACTION_TYPES, OFFICE_TYPES, PriceOffices, ButtonsOffices, ButtonReasearchOffices, TimeOffice } from './office.actions';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';



@Injectable()
export class OfficeEffects {
  arrOffices: Office[];
  money: number;
  multi: number;
  price: number;
  energy: number;

  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takePrice)).subscribe(data => this.price = data);
    this.store.pipe(select(takeEnergy)).subscribe(data => this.energy = data);
    this.store.pipe(select(takeOffice)).subscribe(data => {
      this.arrOffices = [
        data.accumulator,
        data.bigAccumulator,
        data.sell,
        data.bigSell,
        data.control,
      ];
    });
  }

  @Effect({ dispatch: false })
  changePrice$ = this.actions$.pipe(
    ofType(
      RESOURCES_ACTION_TYPES.CHANGE_MULTI, RESOURCES_ACTION_TYPES.START_GAME,
      RESOURCES_ACTION_TYPES.RESET, RESOURCES_ACTION_TYPES.HARD_RESET,
      OFFICE_ACTION_TYPES.BUY_ROOM_OFFICES, OFFICE_ACTION_TYPES.BUY_TOOL_OFFICES
    ),
    tap(() => {
      const payload = {
        accu: {
          room: 0,
          tool: 0,
        },
        bigAccu: {
          room: 0,
          tool: 0,
        },
        sell: {
          room: 0,
          tool: 0,
        },
        bigSell: {
          room: 0,
          tool: 0,
        },
        control: {
          room: 0,
          tool: 0,
        },
      };
      this.arrOffices.forEach((offi) => {
        const toolPrice = (((offi.multi.price + 5) * (6 * (offi.room + this.multi) + 3 * Math.pow(offi.room + this.multi, 2))) / 2)
          - ((offi.multi.price * (4 * offi.room + 3 * Math.pow(offi.room, 2))) / 2);
        const roomPrice = ((7 * offi.multi.price * (7 * (offi.secondResources + this.multi)
          + 3 * Math.pow(offi.secondResources + this.multi, 2))) / 2);
        switch (offi.type) {
          case OFFICE_TYPES.ACCUMULATOR:
            payload.accu.tool = toolPrice;
            payload.accu.room = roomPrice;
            break;
          case OFFICE_TYPES.BIG_ACCUMULATOR:
            payload.bigAccu.tool = toolPrice;
            payload.bigAccu.room = roomPrice;
            break;
          case OFFICE_TYPES.SELL:
            payload.sell.tool = toolPrice;
            payload.sell.room = roomPrice;
            break;
          case OFFICE_TYPES.BIG_SELL:
            payload.bigSell.tool = toolPrice;
            payload.bigSell.room = roomPrice;
            break;
          case OFFICE_TYPES.CONTROL:
            payload.control.tool = toolPrice;
            payload.control.room = roomPrice;
            break;
        }
      });
      this.store.dispatch(new PriceOffices(payload));
    })
  );

  @Effect({ dispatch: false })
  buttonStatus$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.CHANGE_MONEY, OFFICE_ACTION_TYPES.PRICE_OFFICES),
    tap(() => {
      const payload = {
        accu: {
          tool: true,
          room: true,
        },
        bigAccu: {
          tool: true,
          room: true,
        },
        sell: {
          tool: true,
          room: true,
        },
        bigSell: {
          tool: true,
          room: true,
        },
        control: {
          tool: true,
          room: true,
        },
      };
      this.arrOffices.forEach((offi) => {
        let tool = true;
        let room = true;
        if (offi.price.room <= this.money) {
          room = false;
        }
        if (offi.price.secondResources <= this.money) {
          tool = false;
        }
        switch (offi.type) {
          case OFFICE_TYPES.ACCUMULATOR:
            payload.accu.room = room;
            payload.accu.tool = tool;
            break;
          case OFFICE_TYPES.BIG_ACCUMULATOR:
            payload.bigAccu.tool = tool;
            payload.bigAccu.room = room;
            break;
          case OFFICE_TYPES.SELL:
            payload.sell.tool = tool;
            payload.sell.room = room;
            break;
          case OFFICE_TYPES.BIG_SELL:
            payload.bigSell.tool = tool;
            payload.bigSell.room = room;
            break;
          case OFFICE_TYPES.CONTROL:
            payload.control.tool = tool;
            payload.control.room = room;
            break;
        }
      });
      this.store.dispatch(new ButtonsOffices(payload));
    })
  );

  @Effect({ dispatch: false })
  researchButtonStatus$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.CHANGE_MONEY, RESOURCES_ACTION_TYPES.START_GAME, OFFICE_ACTION_TYPES.RESET_OFFICES),
    tap(() => {
      const payload = {
        accu: true,
        bigAccu: true,
        sell: true,
        bigSell: true,
        control: true,
      };
      this.arrOffices.forEach((offi) => {
        let temp: boolean;
        if (offi.price.research <= this.money) {
          temp = false;
        } else {
          temp = true;
        }
        switch (offi.type) {
          case OFFICE_TYPES.ACCUMULATOR:
            payload.accu = temp;
            break;
          case OFFICE_TYPES.BIG_ACCUMULATOR:
            payload.bigAccu = temp;
            break;
          case OFFICE_TYPES.SELL:
            payload.sell = temp;
            break;
          case OFFICE_TYPES.BIG_SELL:
            payload.bigSell = temp;
            break;
          case OFFICE_TYPES.CONTROL:
            payload.control = temp;
            break;
        }
        this.store.dispatch(new ButtonReasearchOffices(payload));
      });
    })
  );

  @Effect({ dispatch: false })
  autoSell$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.START_GAME),
    tap(() => {
      interval(1000).subscribe(() => {
        const time = {
          sell: 0,
          bigSell: 0,
        };
        this.arrOffices.forEach((offi) => {
          if (offi.status.work) {
            if (offi.time <= offi.workTime) {
              switch (offi.type) {
                case OFFICE_TYPES.SELL:
                  time.sell = 0;
                  break;
                case OFFICE_TYPES.BIG_SELL:
                  time.bigSell = 0;
                  break;
              }
              if (offi.minPrice >= this.price) {
                let temp: number;
                if (offi.maxEnergy < this.energy) {
                  temp = this.energy;
                } else {
                  temp = offi.maxEnergy;
                }
                this.store.dispatch(new ChangeEnergy(temp));
                this.store.dispatch(new ChangeMoney(temp * this.price));
              }
            } else {
              switch (offi.type) {
                case OFFICE_TYPES.SELL:
                  time.sell = offi.workTime + 1;
                  break;
                case OFFICE_TYPES.BIG_SELL:
                  time.bigSell = offi.workTime + 1;
                  break;
              }
            }
          }
        });
        this.store.dispatch(new TimeOffice(time));
      });
    })
  );
}
