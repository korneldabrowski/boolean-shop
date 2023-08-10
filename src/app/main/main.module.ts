import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from './../ui/ui.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from '../product/product.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserModule } from '../user/user.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AllProductsPageComponent } from './all-products-page/all-products-page.component';

@NgModule({
  declarations: [HomeComponent, ProductPageComponent, UserProfilePageComponent, CartPageComponent, AllProductsPageComponent],
  imports: [CommonModule, UIModule, ProductModule, UserModule],
})
export class MainModule {}
