import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket } from '../models/Basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basketSubject: BehaviorSubject<Basket | null> =
    new BehaviorSubject<Basket | null>(null);
  basket$: Observable<Basket | null> = this.basketSubject.asObservable();

  constructor(private http: HttpClient) {}

  setUserBasket(userId: number): void {
    this.http
      .get<Basket[]>(`https://fakestoreapi.com/carts/user/${userId}`)
      .subscribe({
        next: (baskets) => {
          if (baskets && baskets.length > 0) {
            const firstBasket = baskets[0];
            this.processSingleBasket(firstBasket);
          } else {
            console.log('User has no baskets.');
          }
        },

        error: (error) => {
          console.error('Error fetching user baskets:', error);
        },
      });
  }

  private processSingleBasket(basket: Basket): void {
    this.basketSubject.next(basket);
    console.log('User basket set:', basket);
  }

  getBasket(): Basket | null {
    return this.basketSubject.getValue();
  }
}
