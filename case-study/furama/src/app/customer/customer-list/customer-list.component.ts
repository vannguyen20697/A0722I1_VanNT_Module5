import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  customerForm: FormGroup;
  customerTypes: CustomerType[];
  searchForm: FormGroup;
  p = 1;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.searchForm = new FormGroup({
      nameCustomer: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllCustomerType();
  }

  private getAllCustomer() {
    this.customerService.findAll().subscribe(next => {
      this.customers = next;
    });
  }

  private getAllCustomerType() {
    this.customerTypeService.findAll().subscribe(next => {
      this.customerTypes = next;
    });
  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(next => {
      this.customer = next;
    });
  }

  removeProduct(id) {
    this.customerService.deleteById(this.customer.id).subscribe(() => {
      this.router.navigateByUrl('/customer');
      this.getAllCustomer();
    });
  }

  onSearch() {
    const rfSearch = this.searchForm.value;
    this.customerService.search(rfSearch).subscribe(next => {
        this.customers = next;
      }
    );
  }
}
