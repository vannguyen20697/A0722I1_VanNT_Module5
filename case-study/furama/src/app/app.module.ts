import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyResortComponent } from './body-resort/body-resort.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { ServiceListComponent } from './service-sector/service-list/service-list.component';
import { ServiceCreateComponent } from './service-sector/service-create/service-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    BodyResortComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ContractListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
