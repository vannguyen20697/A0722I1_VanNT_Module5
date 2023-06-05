import { Component, OnInit } from '@angular/core';
import {Status} from '../../model/status';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../sevice/product.service';
import {StatusService} from '../sevice/status.service';

@Component({
  selector: 'app-product-cre',
  templateUrl: './product-cre.component.html',
  styleUrls: ['./product-cre.component.css']
})
export class ProductCreComponent implements OnInit {
  statuses: Status[];
  rfProduct: FormGroup;
  constructor(private productService: ProductService,
              private statusService: StatusService) { }

  ngOnInit(): void {
    this.rfProduct = new FormGroup({
      productNo: new FormControl('', [
        Validators.required,
      ]),
      productName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      productPrice: new FormControl('', [
        Validators.required,
      ]),
      productDescription: new FormControl('', [
        Validators.required,
      ]),
      productStatus: new FormControl('', [
        Validators.required,
      ]),
    });
    this.statuses = this.statusService.findAll();
  }

  addProduct() {
    const product = this.rfProduct.value;
    product.productStatus = this.statusService.findById(product.productStatus);
    this.productService.save(product);
  }
}
