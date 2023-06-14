import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {Service} from "../../model/service";
import {RentalType} from "../../model/RentalType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {RentalTypeService} from "../../service/rental-type.service";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Service[];
  service: Service;
  serviceForm: FormGroup;
  rentalTypes: RentalType[];
  searchForm: FormGroup;
  p = 1;
  constructor(private serviceService: ServiceService,
              private rentalTypeService: RentalTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllService();
    this.getAllRentalType();
  }

  private getAllService() {
    this.serviceService.findAll().subscribe(next => {
      this.services = next;
    });
  }

  private getAllRentalType() {
    this.rentalTypeService.findAll().subscribe(next => {
      this.rentalTypes = next;
    });
  }
}
