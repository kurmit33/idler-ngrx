import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ProductionAction } from '../production.model';
import { PRODUCTION_TYPES, Work, Buy, Upgrade, ResearchProduction } from '../production.actions';
import { takeMulti, takeMoney } from 'src/app/resources/resources.selectors';
import { takeProductionObj, selectProductionObj } from '../production.selectors';
import { ChangeMoney, ChangeEnergy } from 'src/app/resources/resources.actions';
import { Effect } from '@ngrx/effects';

@Component({
  selector: 'app-production-card',
  templateUrl: './production-card.component.html',
  styleUrls: ['./production-card.component.css']
})
export class ProductionCardComponent implements OnInit {
  @Input() id: number;
  arrProd: ProductionAction[];
  productionBuilding: ProductionAction;
  multi: number;
  money: number;
  valueMulti: number;
  constructor(private store: Store<AppState>) {
    this.store.pipe(select(takeMulti)).subscribe(data => this.multi = data);
    this.store.pipe(select(takeMoney)).subscribe(data => this.money = data);
    this.store.pipe(select(takeProductionObj)).subscribe(data => {
      this.arrProd = [
        data.cell,
        data.bucket,
        data.hamster,
        data.dynamo,
        data.thunder,
      ];
    });
  }

  ngOnInit() {
    this.arrProd.forEach((prod) => {
      if (this.id === prod.id) {
        this.store.pipe(select(selectProductionObj, prod.type)).subscribe(data => this.productionBuilding = data);
        this.valueMulti = 100 / this.productionBuilding.production.time;
      }
    });
  }

  work() {
    if (this.productionBuilding.space - this.productionBuilding.timeResources === 0) {
      this.store.dispatch(new ChangeEnergy(this.productionBuilding.production.energy));
    } else {
      this.store.dispatch(new Work({ ind: this.productionBuilding.type, diff: true }));
    }
  }

  upgrade() {
    if (this.productionBuilding.price.upgrade <= this.money) {
      this.store.dispatch(new ChangeMoney(-this.productionBuilding.price.upgrade * 10));
      this.store.dispatch(new Upgrade({ ind: this.productionBuilding.type, diff: this.multi }));
    }
  }

  buy() {
    if ((this.productionBuilding.price.timeResource <= this.money)
      && (this.productionBuilding.space - this.productionBuilding.timeResources >= this.multi)) {
      this.store.dispatch(new ChangeMoney(-this.productionBuilding.price.timeResource));
      this.store.dispatch(new Buy({ ind: this.productionBuilding.type, diff: this.multi }));
    }
  }

  research() {
    if ((this.productionBuilding.price.research <= this.money)) {
      this.store.dispatch(new ResearchProduction(this.productionBuilding.type));
    }
  }
}
