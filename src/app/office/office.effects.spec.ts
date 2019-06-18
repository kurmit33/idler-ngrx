import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OfficeEffects } from './office.effects';

describe('OfficeEffects', () => {
  let actions$: Observable<any>;
  let effects: OfficeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OfficeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(OfficeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
