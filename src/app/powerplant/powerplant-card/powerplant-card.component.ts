import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PowerPlant } from '../powerplant.model';
import { AppState } from 'src/app/reducers';
import { takePowerPlants, selectPowerPlant } from '../powerplant.selector';
import { Build, Upgrade, Hire, Research } from '../powerplant.actions';
import { takeMulti, takeMoney, takeGreen, takeWorkes } from 'src/app/resources/resources.selectors';
import { ChangeMoney, ChangeGreen, ChangeWorkers } from 'src/app/resources/resources.actions';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-powerplant-card',
  templateUrl: './powerplant-card.component.html',
  styleUrls: ['./powerplant-card.component.css']
})
export class PowerplantCardComponent implements OnInit {
  @Input() id: number;
  powerPlant$: Observable<PowerPlant>;
  arrPP: PowerPlant[];
  powerPlant: PowerPlant;
  multi: number;
  money: number;
  green: number;
  workers: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const powerpl = this.store.pipe(select(takePowerPlants)).subscribe(data => {
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
    powerpl.unsubscribe();
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takeGreen)).subscribe(data => this.green = data);
    this.store.pipe(select(takeWorkes)).subscribe(data => this.workers = data);
    this.arrPP.forEach((power) => {
      if (this.id === power.id) {
        this.store.pipe(select(selectPowerPlant, power.type)).subscribe(data => this.powerPlant = data);
      }
    });

  }

  research() {
    if (this.powerPlant.price.research.money <= this.money
      && (this.powerPlant.price.research.green <= this.green || this.powerPlant.price.research.green === 0)) {
      this.store.dispatch(new ChangeMoney(-this.powerPlant.price.research.money));
      this.store.dispatch(new Research(this.powerPlant.type));
    }
  }

  build() {
    if (this.powerPlant.price.build.money <= this.money
      && this.multi <= this.powerPlant.space - this.powerPlant.buildings
      && (this.powerPlant.price.build.green <= this.green || this.powerPlant.price.build.green === 0)) {
      const priceMoney = this.powerPlant.price.build.money;
      const priceGreen = this.powerPlant.price.build.green;
      this.store.dispatch(new Build({ ind: this.powerPlant.type, diff: this.multi }));
      if (this.powerPlant.startPrice.green) {
        this.store.dispatch(new ChangeGreen(-priceGreen));
      } else {
        const temp = this.powerPlant.multi.production.green * this.multi;
        this.store.dispatch(new ChangeGreen(temp));
        console.log(temp);
      }
      this.store.dispatch(new ChangeMoney(-priceMoney));
      delay(100);
    }
  }

  upgrade() {
    if (this.powerPlant.price.upgrade.money <= this.money
      && (this.powerPlant.price.upgrade.green <= this.green || this.powerPlant.price.upgrade.green === 0)) {
      const priceMoney = this.powerPlant.price.upgrade.money;
      const priceGreen = this.powerPlant.price.upgrade.green;
      this.store.dispatch(new Upgrade({ ind: this.powerPlant.type, diff: this.multi }));
      if (this.powerPlant.startPrice.green > 0) {
        this.store.dispatch(new ChangeGreen(-priceGreen));
      } else {
        this.store.dispatch(new ChangeGreen(this.powerPlant.multi.production.green * this.multi));
      }
      this.store.dispatch(new ChangeMoney(-priceMoney));
      delay(100);
    }
  }

  hire() {
    if (this.multi <= this.workers) {
      this.store.dispatch(new Hire({ ind: this.powerPlant.type, diff: this.multi }));
      this.store.dispatch(new ChangeWorkers(-this.multi));
      delay(100);
    }
  }
}
