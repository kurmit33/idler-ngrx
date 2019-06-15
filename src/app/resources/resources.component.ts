import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeMoney } from './resources.actions';
import { takeMoney } from './resources.selectors';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  money$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.money$ = this.store.pipe(select(takeMoney));
  }

  add() {
    this.store.dispatch(new ChangeMoney(10));
  }
}
