import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppActionTypes } from './app.actions';
import { takeState } from './app.selectors';

@Injectable()
export class AppEffects {
  res$: any;
  res: any;
  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(AppActionTypes.SaveAction),
    tap(() => {
      interval(5000).subscribe(() => {
        this.res$.subscribe(data => this.res = data);
        localStorage.setItem('game', JSON.stringify(this.res));
      });
    })
  );


  constructor(private actions$: Actions, private store: Store<AppState>) {
    this.res$ = store.select(takeState);
  }
}
