import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserProfile } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
})
export class UserProfilePageComponent implements OnInit, OnDestroy {
  userProfile: UserProfile | null;
  userProfileSubscription: Subscription;

  constructor(private userService: UserService) {
    this.userProfile = null;
    this.userProfileSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.userProfileSubscription = this.userService.userProfile$.subscribe(
      (userProfile) => {
        this.userProfile = userProfile;
      }
    );
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }
}
