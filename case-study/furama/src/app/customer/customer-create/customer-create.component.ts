import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[];
  customers: Customer[];
  rfProduct: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.rfProduct = new FormGroup({
      idCustomer: new FormControl('', [
        Validators.required,
      ]),
      nameCustomer: new FormControl('', [
        Validators.required,
      ]),
      dateCustomer: new FormControl('', [
        Validators.required,
      ]),
      genderCustomer: new FormControl('', [
        Validators.required,
      ]),
      idCardCustomer: new FormControl('', [
        Validators.required,
      ]),
      phoneCustomer: new FormControl('', [
        Validators.required,
      ]),
      emailCustomer: new FormControl('', [
        Validators.required,
      ]),
      typeCustomer: new FormControl('', [
        Validators.required,
      ]),
      addressCustomer: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  private getAllCustomerType() {
    this.customerTypeService.findAll().subscribe(data => {
      this.customerTypes = data;
    });
  }

  addProduct() {
    const customer = this.rfProduct.value;
    this.customerService.save(customer).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/customer');
    });
  }
}
