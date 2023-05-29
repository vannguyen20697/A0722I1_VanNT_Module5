import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalComponent } from './conponent/add-modal/add-modal.component';
import { DeleteModalComponent } from './conponent/delete-modal/delete-modal.component';
import { StudentComponent } from './conponent/student/student.component';
import { LikeComponent } from './conponent/like/like.component';
import { StudentCreateComponent } from './conponent/student-create/student-create.component';
import { ChildComponent } from './conponent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    DeleteModalComponent,
    StudentComponent,
    LikeComponent,
    StudentCreateComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
