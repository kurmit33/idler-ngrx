import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ProductionAction } from '../production.model';
import { WorkProductions, BuyProductions, UpgradeProductions, ResearchProduction, PRODUCTION_TYPES } from '../production.actions';
import { takeMulti, takeMoney } from 'src/app/resources/resources.selectors';
import { takeProductionObj, selectProductionObj } from '../production.selectors';
import { ChangeMoney, ChangeEnergy } from 'src/app/resources/resources.actions';

@Component({
  selector: 'app-production-card',
  templateUrl: './production-card.component.html',
  styleUrls: ['./production-card.component.css']
})
export class ProductionCardComponent implements OnInit {
  @Input() type: PRODUCTION_TYPES;
  productionBuilding: ProductionAction;
  multi: number;
  money: number;
  valueMulti: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(selectProductionObj, this.type)).subscribe(data => this.productionBuilding = data);
    this.valueMulti = 100 / this.productionBuilding.production.time;
  }

  work() {
    if (this.productionBuilding.space - this.productionBuilding.timeResources === 0) {
      this.store.dispatch(new ChangeEnergy(this.productionBuilding.production.energy));
    } else {
      this.store.dispatch(new WorkProductions({ ind: this.productionBuilding.type, diff: true }));
    }
  }

  upgrade() {
    if (this.productionBuilding.price.upgrade <= this.money) {
      const temp = this.productionBuilding.price.upgrade;
      this.store.dispatch(new UpgradeProductions({ ind: this.productionBuilding.type, diff: this.multi }));
      this.store.dispatch(new ChangeMoney(-temp));
    }
  }

  buy() {
    if ((this.productionBuilding.price.timeResource <= this.money)
      && (this.productionBuilding.space - this.productionBuilding.timeResources >= this.multi)) {
      const temp = this.productionBuilding.price.timeResource;
      this.store.dispatch(new BuyProductions({ ind: this.productionBuilding.type, diff: this.multi }));
      this.store.dispatch(new ChangeMoney(-temp));
    }
  }

  research() {
    if ((this.productionBuilding.price.research <= this.money)) {
      this.store.dispatch(new ResearchProduction(this.productionBuilding.type));
      this.store.dispatch(new ChangeMoney(-this.productionBuilding.price.research));
    }
  }
}
