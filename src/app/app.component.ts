import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'boolean-shop';

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.setUserProfile('mor_2314');
  }
}
