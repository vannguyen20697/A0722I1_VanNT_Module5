import {Component, OnInit} from '@angular/core';
import {Product1} from '../../model/product1';
import {ProductService} from '../../service/product.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Status} from '../../model/status';
import {StatusService} from '../../service/status.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product1[];
  product: Product1;
  productForm: FormGroup;
  statuses: Status[];
  constructor(private productService: ProductService,
              private statusService: StatusService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllStatus();
  }

  private getAllProduct() {
    this.productService.findAll().subscribe(next => {
      this.products = next;
    });
  }

  private getAllStatus() {
    this.statusService.findAll().subscribe(data => {
      this.statuses = data;
    });
  }

  getProduct(id: number) {
    this.productService.findById(id).subscribe(data => {
      this.product = data;
    });
  }

  removeProduct(id: number) {
    this.productService.deleteById(this.product.id).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      this.getAllProduct();
    });
  }


}
