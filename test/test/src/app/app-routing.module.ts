import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './component/student/student.component';
import {StudentCreateComponent} from './component/student-create/student-create.component';
import {StudenlDetailComponent} from './component/student-detail/studenl-detail.component';


const routes: Routes = [
  {path: 'student/list', component: StudentComponent},
  {path: 'student/create', component: StudentCreateComponent},
  {path: 'student/detail', component: StudenlDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
