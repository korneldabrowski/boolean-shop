import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileDropdownComponent } from './user-profile-dropdown/user-profile-dropdown.component';
import { UserBasketDropdownComponent } from './user-basket-dropdown/user-basket-dropdown.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileDropdownComponent,
    UserBasketDropdownComponent,
  ],
  exports: [
    ProfileComponent,
    UserProfileDropdownComponent,
    UserBasketDropdownComponent,
  ],
  imports: [CommonModule],
})
export class UserModule {}
