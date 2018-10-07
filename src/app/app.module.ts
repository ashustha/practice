import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { MenTshirtComponent } from './men-tshirt/men-tshirt.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HomeComponent } from './home/home.component';
import { WomenWearComponent } from './women-wear/women-wear.component';

@NgModule({
  declarations: [
    AppComponent,
    MenTshirtComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    AccessoriesComponent,
    HomeComponent,
    WomenWearComponent
  ],
  imports: [
   routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
