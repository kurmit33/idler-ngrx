import { Component, OnInit, Input } from '@angular/core';
import { OFFICE_TYPES, AutoSell, MinPrice, BuyRoomOffices, BuyToolOffices, ResearchOffices } from '../office.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { takeOffice, selectOffice } from '../office.selectors';
import { Office } from '../office.models';
import { takeMoney, takeMulti } from 'src/app/resources/resources.selectors';
import { ChangeMoney } from 'src/app/resources/resources.actions';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.css']
})
export class OfficeCardComponent implements OnInit {
  @Input() type: OFFICE_TYPES;
  office: Office;
  isOn: string;
  autoSell: boolean;
  workStatus: boolean;
  minPrice: number;
  money: number;
  multi: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(selectOffice, this.type)).subscribe(data => this.office = data);
    if (this.office.type === OFFICE_TYPES.SELL || this.office.type === OFFICE_TYPES.BIG_SELL) {
      this.workStatus = this.office.status.work;
      this.minPrice = this.office.minPrice;
      this.autoSell = true;
      if (this.workStatus) {
        this.isOn = 'ON';
      } else {
        this.isOn = 'OFF';
      }
    } else {
      this.autoSell = false;
    }
  }

  change() {
    if (!this.workStatus) {
      this.store.dispatch(new AutoSell({ ind: this.office.type, diff: true }));
      this.isOn = 'ON';
    } else {
      this.store.dispatch(new AutoSell({ ind: this.office.type, diff: false }));
      this.isOn = 'OFF';
    }
  }

  newMinPrice() {
    this.store.dispatch(new MinPrice({ ind: this.type, diff: Number(this.minPrice) }));
    console.log(this.type);
  }

  buyRoom() {
    if (this.money >= this.office.price.room) {
      const temp = this.office.price.room;
      this.store.dispatch(new BuyRoomOffices({ind: this.office.type, diff: this.multi}));
      this.store.dispatch(new ChangeMoney(-temp));
    }
  }

  buyTool() {
    if (this.money >= this.office.price.secondResources && this.office.space >= this.multi) {
      const temp = this.office.price.room;
      this.store.dispatch(new BuyToolOffices({ind: this.office.type, diff: this.multi}));
      this.store.dispatch(new ChangeMoney(-temp));
    }
  }

  research() {
    if (this.money >= this.office.price.research) {
      const temp = this.office.price.room;
      this.store.dispatch(new ResearchOffices(this.office.type));
      this.store.dispatch(new ChangeMoney(-temp));
    }
  }
}
