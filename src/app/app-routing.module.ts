import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { authGuard } from './services/auth.guard';
import { ProductPageComponent } from './main/product-page/product-page.component';
import { UserProfilePageComponent } from './main/user-profile-page/user-profile-page.component';
import { AllProductsPageComponent } from './main/all-products-page/all-products-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'view-all-products',
    component: AllProductsPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
