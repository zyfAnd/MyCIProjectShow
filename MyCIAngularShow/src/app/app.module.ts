import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetatilsComponent } from './product-detatils/product-detatils.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HerosComponent } from './heros/heros.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetatilsComponent,
    EmploymentDetailsComponent,
    CustomerInfoComponent,
    HerosComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
