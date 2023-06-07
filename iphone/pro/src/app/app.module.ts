import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
// import { ProductCreateComponent } from './component/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StatusListComponent } from './component/status-list/status-list.component';
import {ProductCreate1Component} from './component/product-create1/product-create1.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    // ProductCreateComponent,
    StatusListComponent,
    ProductCreate1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
