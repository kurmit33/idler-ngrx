import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductionEffects } from './production.effects';

describe('ProductionEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProductionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
