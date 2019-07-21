import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { takePowerPlants } from './powerplant.selector';
import { PowerPlant } from './powerplant.model';

@Component({
  selector: 'app-powerplant',
  templateUrl: './powerplant.component.html',
  styleUrls: ['./powerplant.component.css']
})
export class PowerplantComponent implements OnInit {
  arrPp: PowerPlant[];
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    const sub = this.store.pipe(select(takePowerPlants)).subscribe(data => {
      this.arrPp = [
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
    sub.unsubscribe();
  }


}
