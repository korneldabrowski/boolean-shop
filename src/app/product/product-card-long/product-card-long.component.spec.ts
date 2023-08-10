import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardLongComponent } from './product-card-long.component';

describe('ProductCardLongComponent', () => {
  let component: ProductCardLongComponent;
  let fixture: ComponentFixture<ProductCardLongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardLongComponent]
    });
    fixture = TestBed.createComponent(ProductCardLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
