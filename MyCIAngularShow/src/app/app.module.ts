import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetatilsComponent } from './product-detatils/product-detatils.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetatilsComponent,
    EmploymentDetailsComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
