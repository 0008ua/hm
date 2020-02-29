import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductFormEffects } from './product-form.effects';

describe('ProductFormEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductFormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductFormEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProductFormEffects>(ProductFormEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
