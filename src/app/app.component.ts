import { Component, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers';
import { LoadResources, StartGame, ChangeEnergy } from './resources/resources.actions';
import { delay } from 'rxjs/operators';
import { takeState } from './app.selectors';
import { LoadPowerPlants } from './powerplant/powerplant.actions';
import { LoadProductions } from './production/production.actions';
import { LoadEvents } from './event/event.actions';
import { TimeControl, OFFICE_TYPES, LoadOffices } from './office/office.actions';
import { selectOffice } from './office/office.selectors';
import { Office } from './office/office.models';
import { takeProduction, takeEnergy } from './resources/resources.selectors';

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
    this.store.dispatch(new TimeControl(new Date()));
    this.store.select(takeState).subscribe(data => this.res = data);
    localStorage.setItem('game', JSON.stringify(this.res));
    delay(1000);

  }
  constructor(private store: Store<AppState>) {

  }

// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const storage = localStorage.getItem('game');
    if (storage) {
      const load = JSON.parse(storage);
      this.store.dispatch(new LoadResources(load.resources));
      this.store.dispatch(new LoadPowerPlants(load.powerplant));
      this.store.dispatch(new LoadProductions(load.production));
      this.store.dispatch(new LoadEvents(load.event));
      this.store.dispatch(new LoadOffices(load.office));
      const time = new Date();
      let energy: number;
      let control: Office;
      let accu: Office;
      let bigAccu: Office;
      let prodPerTick: number;
      const subControl = this.store.pipe(select(selectOffice, OFFICE_TYPES.CONTROL)).subscribe(data => control = data);
      const subAccu = this.store.pipe(select(selectOffice, OFFICE_TYPES.ACCUMULATOR)).subscribe(data => accu = data);
      const subBigAccu = this.store.pipe(select(selectOffice, OFFICE_TYPES.BIG_ACCUMULATOR)).subscribe(data => bigAccu = data);
      const subProd = this.store.pipe(select(takeProduction)).subscribe(data => prodPerTick = data);
      const subEnerg = this.store.pipe(select(takeEnergy)).subscribe(data => energy = data);
      subProd.unsubscribe();
      subControl.unsubscribe();
      subAccu.unsubscribe();
      subBigAccu.unsubscribe();
      subEnerg.unsubscribe();
      const maxEnergy = accu.maxEnergy + bigAccu.maxEnergy;
      const lastTime = new Date(control.offlineTime);
      const diff = (((time.getTime() - lastTime.getTime()) / 250) * prodPerTick) * control.maxEnergy;
      let temp: number;
      if (maxEnergy < diff + energy) {
        temp = maxEnergy - energy;
      } else {
        temp = diff;
      }
      this.store.dispatch(new ChangeEnergy(temp));
    }
    this.store.dispatch(new StartGame());
  }
}
