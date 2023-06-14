import {Component, OnInit} from '@angular/core';
import {Status} from '../../model/status';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {StatusService} from '../../service/status.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  statuses: Status[];
  status: Status;
  id: number;

  constructor(private productService: ProductService,
              private statusService: StatusService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productNo: new FormControl(''),
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productDay: new FormControl(''),
      productDescription: new FormControl(''),
      status: new FormControl('')
    });

    this.statusService.findAll().subscribe(data => {
      this.statuses = data;
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(product => {
        this.productForm.patchValue(product);
        this.productForm.get('status').setValue(product.status.id);
      });
    });
  }
  updateProduct(id: number) {
    const product = this.productForm.value;

    product.status = this.statuses.find(status => status.id === +product.status);

    this.productService.update(id, product).subscribe(() => {
      this.router.navigateByUrl('/product/list');
    });


    // private getProduct(id: number) {
  //   return this.productService.findById(id).subscribe(product => {
  //     this.productForm = new FormGroup({
  //       productNo: new FormControl(product.productNo),
  //       productName: new FormControl(product.productName),
  //       productPrice: new FormControl(product.productPrice),
  //       productDay: new FormControl(product.productDay),
  //       productDescription: new FormControl(product.productDescription),
  //       status: new FormControl(product.status.statusNo)
  //     });
  //   });
  // }


    // this.statusService.findById(+product.status).subscribe(status => {
    //   product.status = status[0];
    //   this.productService.update(id, product).subscribe(() => {
    //     this.router.navigateByUrl('/product/list');
    //   });
    // });

    // function delay(ms: number) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(resolve, ms);
    //     setTimeout(reject, ms);
    //   });
    // }
    // delay(0).then(() => {
    //   this.statusService.findById(product.status).subscribe(data => {
    //     product.status = data;
    //   });
    //   return delay(1000);
    // })
    //   .then(() => {
    //     this.productService.update(id, product).subscribe(() => {
    //       this.router.navigateByUrl('/product/list');
    //     });
    //   });
  }
}

