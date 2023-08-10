import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsPageComponent } from './all-products-page.component';

describe('AllProductsPageComponent', () => {
  let component: AllProductsPageComponent;
  let fixture: ComponentFixture<AllProductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsPageComponent]
    });
    fixture = TestBed.createComponent(AllProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
