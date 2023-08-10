import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-card-long',
  templateUrl: './product-card-long.component.html',
  styleUrls: ['./product-card-long.component.css'],
})
export class ProductCardLongComponent {
  @Input() product: Product | null = null;
}
