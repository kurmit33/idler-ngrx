import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Event } from './event.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeEvent, ChangeTimeEvent, EVENT_TYPES } from './event.actions';
import { RESOURCES_ACTION_TYPES } from '../resources/resources.actions';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { takeWorkEvent } from './event.selectors';


@Injectable()
export class EventEffects {
  eventWork: Event;

  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.store.pipe(select(takeWorkEvent)).subscribe(data => this.eventWork = data);
  }

  @Effect({ dispatch: false })
  workEvent$ = this.actions$.pipe(
    ofType(RESOURCES_ACTION_TYPES.StartType, RESOURCES_ACTION_TYPES.ResetAction, RESOURCES_ACTION_TYPES.HardResetAction),
    tap(() => {
      interval(5000).subscribe(() => {
        if (this.eventWork.workTime >= 300000) {
          this.switchEvent(Math.random() * (99 - 1) + 1);
        } else {
          this.store.dispatch(new ChangeTimeEvent(this.eventWork.workTime + 1));
        }
      });

    })
  );

  switchEvent(diff: number) {
    switch (diff) {
      case ((diff >= 1 && diff < 16) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('noEvent', 0, 'No Event!', EVENT_TYPES.NO)));
        break;
      case ((diff >= 16 && diff < 30) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('windEvent', 1, 'Wind prod ', EVENT_TYPES.WIND)));
        break;
      case ((diff >= 30 && diff < 43) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('solarEvent', 2, 'Solar prod ', EVENT_TYPES.SOLAR)));
        break;
      case ((diff >= 43 && diff < 55) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('waveEvent', 3, 'Wave prod ', EVENT_TYPES.WAVE)));
        break;
      case ((diff >= 55 && diff < 66) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('waterEvent', 4, 'Water prod ', EVENT_TYPES.WATER)));
        break;
      case ((diff >= 66 && diff < 76) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('geothermalEvent', 5, 'Geo prod ', EVENT_TYPES.GEOTHERMAL)));
        break;
      case ((diff >= 76 && diff < 81) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('coalEvent', 6, 'Coal prod ', EVENT_TYPES.COAL)));
        break;
      case ((diff >= 81 && diff < 85) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('biogasEvent', 7, 'Bio prod ', EVENT_TYPES.BIOGAS)));
        break;
      case ((diff >= 85 && diff < 88) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('oilEvent', 8, 'Oil prod ', EVENT_TYPES.OIL)));
        break;
      case ((diff >= 88 && diff < 90) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('nuclearEvent', 9, 'Nuclear prod ', EVENT_TYPES.NUCLEAR)));
        break;
      case ((diff >= 90 && diff < 91) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('fusionEvent', 10, 'Fusion prod ', EVENT_TYPES.FUSION)));
        break;
      case ((diff >= 91 && diff < 95) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('powerEvent', 11, 'PowerPlant prod ', EVENT_TYPES.POWER)));
        break;
      case ((diff >= 95 && diff < 99) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('productionEvent', 12, 'Action prod ', EVENT_TYPES.PROD)));
        break;
      case ((diff >= 99 && diff <= 100) ? diff : -1):
        this.store.dispatch(new ChangeEvent(new Event('allEvent', 13, 'All prod ', EVENT_TYPES.ALL)));
        break;
      default:
        break;
    }
  }
}
