import { Component, OnInit } from '@angular/core';
import { PowerPlant } from './powerplant.model';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { takePowerPlants } from './powerplant.selector';

@Component({
  selector: 'app-powerplant',
  templateUrl: './powerplant.component.html',
  styleUrls: ['./powerplant.component.css']
})
export class PowerplantComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {}

  arrayOne(num: number) {
    return Array(num);
  }
}
