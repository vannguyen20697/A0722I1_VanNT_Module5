import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsizeComponent } from './component/fontsize/fontsize.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetComponent } from './component/pet/pet.component';
import { ProductComponent } from './component/product/product.component';
import { CaculatorComponent } from './component/caculator/caculator.component';
import { ColorComponent } from './component/color/color.component';
import { HackernewsComponent } from './component/hackernews/hackernews.component';
import { NameCardComponent } from './component/name-card/name-card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { LikeComponent } from './component/like/like.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CountdownComponent } from './component/countdown/countdown.component';
import { LoginComponent } from './component/login/login.component';
import { DictionarypageComponent } from './component/dictionary-find/component/dictionarypage/dictionarypage.component';


@NgModule({
  declarations: [
    AppComponent,
    FontsizeComponent,
    PetComponent,
    ProductComponent,
    CaculatorComponent,
    ColorComponent,
    HackernewsComponent,
    NameCardComponent,
    ProgressBarComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    CountdownComponent,
    LoginComponent,
    DictionarypageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
