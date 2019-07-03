import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PowerplantEffects } from './powerplant.effects';

describe('PowerplantEffects', () => {
// tslint:disable-next-line: prefer-const
  let actions$: Observable<any>;
  let effects: PowerplantEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PowerplantEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PowerplantEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
