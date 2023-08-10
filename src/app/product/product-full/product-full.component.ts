import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.css'],
})
export class ProductFullComponent {
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  addToCart() {
    alert('Product added to cart!');
  }
}
