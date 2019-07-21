import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { takeProductionObj } from './production.selectors';
import { ProductionAction } from './production.model';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  arrProd: ProductionAction[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const sub = this.store.pipe(select(takeProductionObj)).subscribe(data => {
      this.arrProd = [
        data.cell,
        data.bucket,
        data.hamster,
        data.dynamo,
        data.thunder,
      ];
    });
    sub.unsubscribe();
  }
}
