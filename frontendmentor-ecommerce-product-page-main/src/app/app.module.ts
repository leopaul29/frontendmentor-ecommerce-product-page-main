import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart/cart.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ProductComponent } from './product/product/product.component';
import { ProductFeatureCardComponent } from './product/product-feature-card/product-feature-card.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductComponent,
    ProductFeatureCardComponent,
    SidenavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
