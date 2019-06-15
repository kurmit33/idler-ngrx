import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Unload } from './app.actions';
import { SetResources } from './resources/resources.actions';
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
    if (localStorage.getItem('resources')) {
      localStorage.clear();
    }
    this.store.select(takeResources).subscribe(data => this.res = data);
    localStorage.setItem('resources', JSON.stringify(this.res));
    delay(1000);

  }
  constructor(private store: Store<AppState>) {
    const resources = localStorage.getItem('resources');
    if (resources) {
      this.store.dispatch(new SetResources(JSON.parse(resources)));
    }
  }

}
