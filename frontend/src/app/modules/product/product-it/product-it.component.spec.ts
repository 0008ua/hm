import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItComponent } from './product-it.component';

describe('ProductItComponent', () => {
  let component: ProductItComponent;
  let fixture: ComponentFixture<ProductItComponent>;

  beforeEach(async(() => {
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
