import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { State } from './powerplant.reducer';
import { Store } from '@ngrx/store';
import { takePowerPlants } from './powerplant.selector';
import { PowerPlant } from './powerplant.model';



@Injectable()
export class PowerplantEffects {
  constructor(private actions$: Actions, private store: Store<State>) {}

}
