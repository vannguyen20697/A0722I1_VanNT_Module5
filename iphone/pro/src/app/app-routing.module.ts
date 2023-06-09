import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
// import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductCreate1Component} from './component/product-create1/product-create1.component';
import {StatusListComponent} from './component/status-list/status-list.component';
import {ProductEditComponent} from './component/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreate1Component},
  {path: 'product/status', component: StatusListComponent},
  {path: 'product/update/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
