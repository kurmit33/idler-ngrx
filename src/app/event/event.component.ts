import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { takeWorkEvent } from './event.selectors';
import { GameEvent } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  workEvent: GameEvent;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(takeWorkEvent)).subscribe(data => this.workEvent = data);
  }

  ngOnInit() {
  }

}
