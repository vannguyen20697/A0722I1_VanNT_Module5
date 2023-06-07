import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './conponent/student/student.component';
import {StudentCreateComponent} from './conponent/student-create/student-create.component';
import {StudentDetailComponent} from './conponent/student-detail/student-detail.component';


const routes: Routes = [
  {path: 'student/list', component: StudentComponent},
  {path: 'student/create', component: StudentCreateComponent},
  {path: 'student/detail', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
