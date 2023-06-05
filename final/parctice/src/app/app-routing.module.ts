import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {ProductCreComponent} from './component/product-cre/product-cre.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreComponent},
  {path: 'product/detail', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
