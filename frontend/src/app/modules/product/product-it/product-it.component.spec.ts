import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductItComponent } from './product-it.component';

describe('ProductItComponent', () => {
  let component: ProductItComponent;
  let fixture: ComponentFixture<ProductItComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
