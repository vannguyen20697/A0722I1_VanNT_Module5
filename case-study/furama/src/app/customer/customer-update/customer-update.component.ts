import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[];
  customerType: CustomerType;
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      idCustomer: new FormControl(''),
      nameCustomer: new FormControl(''),
      dateCustomer: new FormControl(''),
      genderCustomer: new FormControl(''),
      idCardCustomer: new FormControl(''),
      phoneCustomer: new FormControl(''),
      emailCustomer: new FormControl(''),
      typeCustomer: new FormControl(''),
      addressCustomer: new FormControl('')
    });
    this.customerTypeService.findAll().subscribe(data => {
      this.customerTypes = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerForm.patchValue(customer);
        this.customerForm.get('typeCustomer').setValue(customer.typeCustomer.id);
      });
      // this.customerService.findById(this.id).subscribe(customer => {
      //   this.customerForm.patchValue(customer);
      //   this.customerForm.get('typeCustomer').setValue(customer.typeCustomer.id);
      // });
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    customer.typeCustomer = this.customerTypes.find( typeCustomer => typeCustomer.id === +customer.typeCustomer);
    this.customerService.update(id, customer).subscribe(() => {
      this.router.navigateByUrl('/customer');
    });
  }
}
