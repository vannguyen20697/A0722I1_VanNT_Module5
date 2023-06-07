import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

}
