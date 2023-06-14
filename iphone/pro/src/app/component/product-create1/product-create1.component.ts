import {Component, OnInit} from '@angular/core';
import {Status} from '../../model/status';
import {Product1} from '../../model/product1';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {StatusService} from '../../service/status.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create1',
  templateUrl: './product-create1.component.html',
  styleUrls: ['./product-create1.component.css']
})
export class ProductCreate1Component implements OnInit {
  statuses: Status[];
  products: Product1[];
  rfProduct: FormGroup;
  constructor(private productService: ProductService,
              private statusService: StatusService,
              private router: Router) {
  }

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

  getAllStatus() {
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
