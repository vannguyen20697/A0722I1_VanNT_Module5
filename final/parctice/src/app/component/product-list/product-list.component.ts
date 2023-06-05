import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product1} from '../../model/product1';
import {ProductService} from '../sevice/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product1[];
  product: Product1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }
  getProduct( id: string) {
  }
}
