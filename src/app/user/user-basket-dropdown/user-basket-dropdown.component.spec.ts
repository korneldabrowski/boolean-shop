import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasketDropdownComponent } from './user-basket-dropdown.component';

describe('UserBasketDropdownComponent', () => {
  let component: UserBasketDropdownComponent;
  let fixture: ComponentFixture<UserBasketDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBasketDropdownComponent]
    });
    fixture = TestBed.createComponent(UserBasketDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
