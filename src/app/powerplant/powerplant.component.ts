import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-powerplant',
  templateUrl: './powerplant.component.html',
  styleUrls: ['./powerplant.component.css']
})
export class PowerplantComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() { }

  arrayOne(num: number) {
    return Array(num);
  }
}
