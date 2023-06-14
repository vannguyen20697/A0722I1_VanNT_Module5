// import { Component, OnInit } from '@angular/core';
// import {ProductService} from '../../service/product.service';
// import {StatusService} from '../../service/status.service';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {Router} from '@angular/router';
// import {Status} from '../../model/status';
// import {Product1} from '../../model/product1';
//
// @Component({
//   selector: 'app-product-create',
//   templateUrl: './product-create.component.html',
//   styleUrls: ['./product-create.component.css']
// })
// export class ProductCreateComponent implements OnInit {
//   statuses: Status[];
//   products: Product1[];
//   rfProduct: FormGroup;
//   constructor(private productService: ProductService,
//               private statusService: StatusService,
//               private router: Router) { }
//
//   ngOnInit(): void {
//     this.rfProduct = new FormGroup({
//       productNo: new FormControl('', [
//         Validators.required,
//       ]),
//       productName: new FormControl('', [
//         Validators.required,
//       ]),
//       productPrice: new FormControl('', [
//         Validators.required,
//       ]),
//       productDay: new FormControl('', [
//         Validators.required,
//       ]),
//       productDescription: new FormControl('', [
//         Validators.required,
//       ]),
//       status: new FormControl('', [
//         Validators.required,
//       ]),
//     });
//     this.getAllStatus();
//   }
//
//   getAllStatus() {
//     this.statusService.findAll().subscribe(data => {
//       this.statuses = data;
//       debugger;
//     });
//   }
//   getAllProduct() {
//     this.productService.findAll().subscribe(data => {
//       this.products = data;
//     });
//   }
//
//   addProduct() {
//     const product = this.rfProduct.value;
//     this.productService.save(product).subscribe(data => {
//       this.router.navigateByUrl('/product/list');
//       this.getAllProduct();
//     });
//   }
// }
