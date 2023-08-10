import { HttpClient } from '@angular/common/http';
import { UserProfile } from './../models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userProfileSubject: BehaviorSubject<UserProfile | null> =
    new BehaviorSubject<UserProfile | null>(null);

  userProfile$: Observable<UserProfile | null> =
    this.userProfileSubject.asObservable();

  constructor(private http: HttpClient, private basketService: BasketService) {}

  setUserProfile(username: string): void {
    this.http
      .get<UserProfile[]>('https://fakestoreapi.com/users')
      .pipe(map((users) => users.find((user) => user.username === username)))
      .subscribe({
        next: (userProfile) => {
          this.userProfileSubject.next(userProfile || null);
          this.basketService.setUserBasket(userProfile?.id || 0);
        },
        error: (error) => {
          console.error('Error fetching user profile:', error);
        },
      });
  }
}
