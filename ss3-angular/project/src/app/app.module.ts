import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsizeComponent } from './component/fontsize/fontsize.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './component/pet/pet.component';
import { ProductComponent } from './component/product/product.component';
import { CaculatorComponent } from './component/caculator/caculator.component';
import { ColorComponent } from './component/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizeComponent,
    PetComponent,
    ProductComponent,
    CaculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
