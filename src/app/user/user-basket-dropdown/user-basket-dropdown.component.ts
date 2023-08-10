import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Basket } from 'src/app/models/Basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-user-basket-dropdown',
  templateUrl: './user-basket-dropdown.component.html',
  styleUrls: ['./user-basket-dropdown.component.css'],
})
export class UserBasketDropdownComponent implements OnInit, OnDestroy {
  basket: Basket | null;
  private basketSubscription: Subscription;

  constructor(private basketService: BasketService) {
    this.basket = null;
    this.basketSubscription = this.basketService.basket$.subscribe((basket) => {
      this.basket = basket;
    });
  }

  ngOnInit(): void {
    this.basket = this.basketService.getBasket();
  }

  ngOnDestroy(): void {
    this.basketSubscription.unsubscribe();
  }

  getBasketSize(): number {
    return this.basket?.products.length || 0;
  }
}
