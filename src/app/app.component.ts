import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { LoadResources, StartGame } from './resources/resources.actions';
import { delay } from 'rxjs/operators';
import { takeState } from './app.selectors';
import { LoadPowerPlants } from './powerplant/powerplant.actions';
import { LoadProductions } from './production/production.actions';
import { LoadEvents } from './event/event.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'idler';
  res: any;

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    if (localStorage.getItem('game')) {
      localStorage.clear();
    }
    this.store.select(takeState).subscribe(data => this.res = data);
    localStorage.setItem('game', JSON.stringify(this.res));
    delay(1000);

  }
  constructor(private store: Store<AppState>) {

  }

// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const data = localStorage.getItem('game');
    if (data) {
      const load = JSON.parse(data);
      this.store.dispatch(new LoadResources(load.resources));
      this.store.dispatch(new LoadPowerPlants(load.powerplant));
      this.store.dispatch(new LoadProductions(load.production));
      this.store.dispatch(new LoadEvents(load.event));
    }
    this.store.dispatch(new StartGame());
  }
}
