import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Reset, HardReset, ChangeMoney, ChangeWorkers, ChangeEnergy, ChangeMulit } from './resources.actions';
import { takeMoney, takeEnergy, takeGreen, takeWorkes, takePrice, takeMulti, takeProduction, takeBuildings } from './resources.selectors';
import { ResetPowerPlants } from '../powerplant/powerplant.actions';
import { ResetProductions } from '../production/production.actions';

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
    const sub = this.multi$.subscribe(data => this.selected = data.toString());
    sub.unsubscribe();
  }

  sell() {
    let energy: number;
    let price: number;
    const subEnergy = this.energy$.subscribe(data => energy = data);
    const subPrice = this.price$.subscribe(data => price = data);
    subEnergy.unsubscribe();
    subPrice.unsubscribe();
    this.store.dispatch(new ChangeMoney(energy * price));
    this.store.dispatch(new ChangeEnergy(-energy));
  }

  selectMulti() {
    this.store.dispatch(new ChangeMulit(Number(this.selected)));
  }

  reset() {
    let build: number;
    const sub = this.buildings$.subscribe(data => build = data);
    sub.unsubscribe();
    build = Math.floor(build / 1000);
    this.store.dispatch(new ResetPowerPlants());
    this.store.dispatch(new ResetProductions());
    this.store.dispatch(new Reset(build));
  }

  hardReset() {
    this.store.dispatch(new ResetPowerPlants());
    this.store.dispatch(new ResetProductions());
    this.store.dispatch(new HardReset());
  }
}
