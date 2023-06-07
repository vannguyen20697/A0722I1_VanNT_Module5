import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
// import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductCreate1Component} from './component/product-create1/product-create1.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreate1Component},
  // {path: 'product/detail', component: StudenlDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
