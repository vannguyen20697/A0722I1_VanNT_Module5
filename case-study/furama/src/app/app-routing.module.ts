import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyResortComponent} from './body-resort/body-resort.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee/employee-update/employee-update.component';
import {ServiceListComponent} from './service-sector/service-list/service-list.component';
import {ContractService} from './service/contract.service';
import {ContractListComponent} from "./contract/contract-list/contract-list.component";



const routes: Routes = [
  {path: 'home', component: BodyResortComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/create', component: EmployeeCreateComponent},
  {path: 'employee/update/:id', component: EmployeeUpdateComponent},
  {path: 'service', component: ServiceListComponent},
  {path: 'contract', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
