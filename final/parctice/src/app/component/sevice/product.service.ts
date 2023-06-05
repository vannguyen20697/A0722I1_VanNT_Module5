import { Injectable } from '@angular/core';
import {Product1} from '../../model/product1';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product1[] = [
    { productNo: '1',
      productName: 'IPhone 12',
      productPrice: 2400000,
      productDescription: 'New',
      productStatus: {
        statusNo: '1',
        statusName: 'Sold'
      }

    },
    {
      productNo: '2',
      productName: 'IPhone 11',
      productPrice: 1560000,
      productDescription: 'Like new',
      productStatus: {
        statusNo: '2',
        statusName: 'Stock'
      }
    },
    {
      productNo: '3',
      productName: 'IPhone X',
      productPrice: 968000,
      productDescription: '97%',
      productStatus: {
        statusNo: '2',
        statusName: 'Stock'
      }
    },
    {
      productNo: '4',
      productName: 'IPhone 8',
      productPrice: 7540000,
      productDescription: '98%',
      productStatus: {
        statusNo: '1',
        statusName: 'Sold'
      }
    },
  ];
  constructor() { }
  findAll(): Product1[] {
    return this.products;
  }
  save(product: Product1) {
    this.products.push(product);
  }
}
