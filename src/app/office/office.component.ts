import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { takeOffice } from './office.selectors';
import { Office } from './office.models';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  offices: Office[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    const sub = this.store.pipe(select(takeOffice)).subscribe(data => {
      this.offices = [
        data.accumulator,
        data.bigAccumulator,
        data.sell,
        data.bigSell,
        data.control,
      ];
    });
    sub.unsubscribe();
  }

}
