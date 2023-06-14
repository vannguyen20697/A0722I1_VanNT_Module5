import {Component, OnInit} from '@angular/core';
import {Product1} from '../../model/product1';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Status} from '../../model/status';
import {StatusService} from '../../service/status.service';
import {NgxPaginationModule} from 'ngx-pagination';

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
  searchForm: FormGroup;
  p = 1;

  constructor(private productService: ProductService,
              private statusService: StatusService,
              private router: Router) {
    this.searchForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      proDayStart: new FormControl(),
      proDayEnd: new FormControl(),
    });
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
    this.statusService.findAll().subscribe(next => {
      this.statuses = next;
    });
  }

  getProduct(id: number) {
    this.productService.findById(id).subscribe(next => {
      this.product = next;
    });
  }

  removeProduct(id: number) {
    this.productService.deleteById(this.product.id).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      this.getAllProduct();
    });
  }

  onSearch() {
    const rfSearch = this.searchForm.value;
    this.productService.search(rfSearch).subscribe(next => {
        this.products = next;
      }
    );
  }
}
