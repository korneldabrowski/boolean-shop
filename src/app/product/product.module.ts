import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProductCardLongComponent } from './product-card-long/product-card-long.component';
import { ProductFullComponent } from './product-full/product-full.component';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [
    ProductSectionComponent,
    ProductCardComponent,
    ProductCardLongComponent,
    ProductFullComponent,
  ],
  exports: [
    ProductSectionComponent,
    ProductCardComponent,
    ProductCardLongComponent,
    ProductFullComponent,
  ],
})
export class ProductModule {}
