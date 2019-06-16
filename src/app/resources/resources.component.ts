import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { SellEnergy, MultiSelected, Reset, HardReset } from './resources.actions';
import { takeMoney, takeEnergy, takeGreen, takeWorkes, takePrice, takeMulti, takeProduction, takeBuildings } from './resources.selectors';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  money$: Observable<number>;
  green$: Observable<number>;
  workers$: Observable<number>;
  price$: Observable<number>;
  energy$: Observable<number>;
  multi$: Observable<number>;
  buildings$: Observable<number>;
  production$: Observable<number>;
  selected: string;
  rwd = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.money$ = this.store.pipe(select(takeMoney));
    this.green$ = this.store.pipe(select(takeGreen));
    this.workers$ = this.store.pipe(select(takeWorkes));
    this.price$ = this.store.pipe(select(takePrice));
    this.energy$ = this.store.pipe(select(takeEnergy));
    this.multi$ = this.store.pipe(select(takeMulti));
    this.buildings$ = this.store.pipe(select(takeBuildings));
    this.production$ = this.store.pipe(select(takeProduction));
    this.multi$.subscribe(data => this.selected = data.toString());
  }

  sell() {
    this.store.dispatch(new SellEnergy());
  }

  selectMulti() {
    this.store.dispatch(new MultiSelected(Number(this.selected)));
  }

  reset() {
    this.store.dispatch(new Reset(10));
  }

  hardReset() {
    this.store.dispatch(new HardReset());
  }
}
