import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent {
  @Input() products: Product[] = [];
  @Input() sectionTitle: string = '';
  @Input() sectionDescription: string = '';
  @Input() reversed: boolean = false;
}
