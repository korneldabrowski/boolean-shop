import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from '../user/user.module';

import { ProductModule } from '../product/product.module';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [NavbarComponent, NewsletterComponent],
  exports: [NavbarComponent, NewsletterComponent],
  imports: [CommonModule, UserModule, ProductModule],
})
export class UIModule {}
