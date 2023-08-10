import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { WordLimitPipe } from './pipes/word-limit.pipe';
import { ProductModule } from './product/product.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    UserModule,
    ProductModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
