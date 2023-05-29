import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteModalComponent } from './conponent/delete-modal/delete-modal.component';
import { StudentComponent } from './conponent/student/student.component';
import { LikeComponent } from './conponent/like/like.component';
import { StudentCreateComponent } from './conponent/student-create/student-create.component';
import { ChildComponent } from './conponent/child/child.component';
import { StudentDetailComponent } from './conponent/student-detail/student-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    StudentComponent,
    LikeComponent,
    StudentCreateComponent,
    ChildComponent,
    StudentDetailComponent
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
