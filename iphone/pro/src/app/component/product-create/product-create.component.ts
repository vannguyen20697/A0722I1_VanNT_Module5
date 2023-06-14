import { Component, OnInit } from '@angular/core';
import {Product1} from '../../model/product1';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Status} from '../../model/status';
import {ProductService} from '../../service/product.service';
import {StatusService} from '../../service/status.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  statuses: Status[];
  products: Product1[];
  rfProduct: FormGroup;
  constructor(private productService: ProductService,
              private statusService: StatusService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllStatus();
    this.rfProduct = new FormGroup({
      productNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^MV-[0-9]{3}')
      ]),
      productName: new FormControl('', [
        Validators.required,
      ]),
      productPrice: new FormControl('', [
        Validators.required,
      ]),
      productDay: new FormControl('', [
        Validators.required,
      ]),
      productEnd: new FormControl('', [
        Validators.required
      ]),
      productDescription: new FormControl('', [
        Validators.required,
      ]),
      status: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  private getAllStatus() {
    this.statusService.findAll().subscribe(data => {
      this.statuses = data;
    });
  }
  addProduct() {
    const product = this.rfProduct.value;
    this.productService.save(product).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/product/list');
    });
  }
}
