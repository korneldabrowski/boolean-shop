import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-dropdown',
  templateUrl: './user-profile-dropdown.component.html',
  styleUrls: ['./user-profile-dropdown.component.css'],
})
export class UserProfileDropdownComponent {
  userProfile$: Observable<UserProfile | null>;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.userProfile$ = userService.userProfile$;
  }

  logout(): void {
    console.log('xd');
    this.authService.logout();
  }
}
