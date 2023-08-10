import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Input() userProfile: UserProfile | null = null;
}
