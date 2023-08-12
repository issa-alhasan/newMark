import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';

import { FormsModule } from '@angular/forms';

import { NgForOf } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { ProductDetailsComponent } from '../products/components/product-details/product-details.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports:[
    SpinnerComponent,
    FormsModule,
    HeaderComponent,
    SelectComponent,
    ProductComponent,
    ProductDetailsComponent
  ]
})
export class SharedModule { }
