import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameEvent } from './event.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeEvent, ChangeTimeEvent, EVENT_TYPES, EVENT_ACTION_TYPES } from './event.actions';
import { RESOURCES_ACTION_TYPES } from '../resources/resources.actions';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { takeWorkEvent } from './event.selectors';
import { EventProductions } from '../production/production.actions';
import { POWERPLANT_TYPES, ProductionPowerPlants, ProductionPowerPlant } from '../powerplant/powerplant.actions';
import { takePowerPlants } from '../powerplant/powerplant.selector';
import { PowerPlant } from '../powerplant/powerplant.model';
import { takeWorkes } from '../resources/resources.selectors';


@Injectable()
export class EventEffects {
  eventWork: GameEvent;
  arrPP: PowerPlant[];
  workers: number;

  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.store.pipe(select(takeWorkEvent)).subscribe(data => this.eventWork = data);
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
  workEvent$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.START_GAME, RESOURCES_ACTION_TYPES.RESET, RESOURCES_ACTION_TYPES.HARD_RESET),
    tap(() => {
      interval(1000).subscribe(() => {
        if (this.eventWork.workTime >= 60) {
          this.switchEvent(Math.random() * (99 - 1) + 1);
        } else {
          this.store.dispatch(new ChangeTimeEvent(this.eventWork.workTime + 1));
        }
      });

    })
  );

  @Effect({ dispatch: false })
  changeProductionEvent = this.actions$.pipe(
    ofType(
      EVENT_ACTION_TYPES.CHANGE_EVENT, RESOURCES_ACTION_TYPES.START_GAME,
      RESOURCES_ACTION_TYPES.RESET, RESOURCES_ACTION_TYPES.HARD_RESET
    ),
    tap(() => {
      const payload = {
        wind: 0,
        solar: 0,
        wave: 0,
        water: 0,
        geo: 0,
        coal: 0,
        bio: 0,
        oil: 0,
        nuclear: 0,
        fusion: 0,
      };
      this.arrPP.forEach((power) => {
        const temp = power.buildings * power.multi.production.energy * (power.level + 1);
        const tempProduction = temp + (temp * power.engineers * 0.02) + (temp * this.workers * 0.002);
        switch (power.type) {
          case POWERPLANT_TYPES.WIND:
            payload.wind = tempProduction;
            break;
          case POWERPLANT_TYPES.SOLAR:
            payload.solar = tempProduction;
            break;
          case POWERPLANT_TYPES.WAVE:
            payload.wave = tempProduction;
            break;
          case POWERPLANT_TYPES.WATER:
            payload.water = tempProduction;
            break;
          case POWERPLANT_TYPES.GEOTHERMAL:
            payload.geo = tempProduction;
            break;
          case POWERPLANT_TYPES.COAL:
            payload.coal = tempProduction;
            break;
          case POWERPLANT_TYPES.BIOGAS:
            payload.bio = tempProduction;
            break;
          case POWERPLANT_TYPES.OIL:
            payload.oil = tempProduction;
            break;
          case POWERPLANT_TYPES.NUCLEAR:
            payload.nuclear = tempProduction;
            break;
          case POWERPLANT_TYPES.FUSION:
            payload.fusion = tempProduction;
            break;
        }
      });
      switch (this.eventWork.type) {
        case EVENT_TYPES.NO:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          break;
        case EVENT_TYPES.ALL:
          this.store.dispatch(new EventProductions(this.eventWork.multi));
          payload.wind = payload.wind * (1 + this.eventWork.multi);
          payload.solar = payload.solar * (1 + this.eventWork.multi);
          payload.wave = payload.wave * (1 + this.eventWork.multi);
          payload.water = payload.water * (1 + this.eventWork.multi);
          payload.geo = payload.geo * (1 + this.eventWork.multi);
          payload.coal = payload.coal * (1 + this.eventWork.multi);
          payload.bio = payload.bio * (1 + this.eventWork.multi);
          payload.oil = payload.oil * (1 + this.eventWork.multi);
          payload.nuclear = payload.nuclear * (1 + this.eventWork.multi);
          payload.fusion = payload.fusion * (1 + this.eventWork.multi);
          this.store.dispatch(new ProductionPowerPlants(payload));
          break;
        case EVENT_TYPES.PROD:
          this.store.dispatch(new EventProductions(this.eventWork.multi));
          this.store.dispatch(new ProductionPowerPlants(payload));
          break;
        case EVENT_TYPES.POWER:
          this.store.dispatch(new EventProductions(0));
          payload.wind = payload.wind * (1 + this.eventWork.multi);
          payload.solar = payload.solar * (1 + this.eventWork.multi);
          payload.wave = payload.wave * (1 + this.eventWork.multi);
          payload.water = payload.water * (1 + this.eventWork.multi);
          payload.geo = payload.geo * (1 + this.eventWork.multi);
          payload.coal = payload.coal * (1 + this.eventWork.multi);
          payload.bio = payload.bio * (1 + this.eventWork.multi);
          payload.oil = payload.oil * (1 + this.eventWork.multi);
          payload.nuclear = payload.nuclear * (1 + this.eventWork.multi);
          payload.fusion = payload.fusion * (1 + this.eventWork.multi);
          this.store.dispatch(new ProductionPowerPlants(payload));
          break;
        case EVENT_TYPES.WIND:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.WIND,
            diff: (payload.wind * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.SOLAR:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.SOLAR,
            diff: (payload.solar * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.WAVE:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.WAVE,
            diff: (payload.wave * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.WATER:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.WATER,
            diff: (payload.water * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.GEOTHERMAL:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.GEOTHERMAL,
            diff: (payload.geo * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.COAL:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.COAL,
            diff: (payload.coal * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.BIOGAS:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.BIOGAS,
            diff: (payload.bio * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.OIL:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.OIL,
            diff: (payload.oil * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.NUCLEAR:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.NUCLEAR,
            diff: (payload.nuclear * (1 + this.eventWork.multi))
          }));
          break;
        case EVENT_TYPES.FUSION:
          this.store.dispatch(new EventProductions(0));
          this.store.dispatch(new ProductionPowerPlants(payload));
          this.store.dispatch(new ProductionPowerPlant({
            ind: POWERPLANT_TYPES.FUSION,
            diff: (payload.fusion * (1 + this.eventWork.multi))
          }));
          break;
      }
    })
  );
  switchEvent(diff: number) {
    switch (diff) {
      case ((diff >= 1 && diff < 16) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('noEvent', 0, 'No Event!', EVENT_TYPES.NO)));
        break;
      case ((diff >= 16 && diff < 30) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('windEvent', 1, 'Wind prod ', EVENT_TYPES.WIND)));
        break;
      case ((diff >= 30 && diff < 43) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('solarEvent', 2, 'Solar prod ', EVENT_TYPES.SOLAR)));
        break;
      case ((diff >= 43 && diff < 55) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('waveEvent', 3, 'Wave prod ', EVENT_TYPES.WAVE)));
        break;
      case ((diff >= 55 && diff < 66) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('waterEvent', 4, 'Water prod ', EVENT_TYPES.WATER)));
        break;
      case ((diff >= 66 && diff < 76) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('geothermalEvent', 5, 'Geo prod ', EVENT_TYPES.GEOTHERMAL)));
        break;
      case ((diff >= 76 && diff < 81) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('coalEvent', 6, 'Coal prod ', EVENT_TYPES.COAL)));
        break;
      case ((diff >= 81 && diff < 85) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('biogasEvent', 7, 'Bio prod ', EVENT_TYPES.BIOGAS)));
        break;
      case ((diff >= 85 && diff < 88) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('oilEvent', 8, 'Oil prod ', EVENT_TYPES.OIL)));
        break;
      case ((diff >= 88 && diff < 90) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('nuclearEvent', 9, 'Nuclear prod ', EVENT_TYPES.NUCLEAR)));
        break;
      case ((diff >= 90 && diff < 91) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('fusionEvent', 10, 'Fusion prod ', EVENT_TYPES.FUSION)));
        break;
      case ((diff >= 91 && diff < 95) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('powerEvent', 11, 'PowerPlant prod ', EVENT_TYPES.POWER)));
        break;
      case ((diff >= 95 && diff < 99) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('productionEvent', 12, 'Action prod ', EVENT_TYPES.PROD)));
        break;
      case ((diff >= 99 && diff <= 100) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new GameEvent('allEvent', 13, 'All prod ', EVENT_TYPES.ALL)));
        break;
      default:
        break;
    }
  }
}
