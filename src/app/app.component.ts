import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { SetResources, StartAction } from './resources/resources.actions';
import { delay } from 'rxjs/operators';
import { takeResources } from './resources/resources.selectors';

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
    this.store.select(takeResources).subscribe(data => this.res = data);
    localStorage.setItem('game', JSON.stringify(this.res));
    delay(1000);

  }
  constructor(private store: Store<AppState>) {

  }

// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const data = localStorage.getItem('game');
    if (data) {
      const res = JSON.parse(data);
      this.store.dispatch(new SetResources(res.resources));
    }
    this.store.dispatch(new StartAction());
  }
}
