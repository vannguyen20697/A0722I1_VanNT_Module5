import { Injectable } from '@angular/core';
import {Product1} from '../model/product1';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRO = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Product1[]> {
    return this.httpClient.get<Product1[]>(this.API_PRO);
  }
  save(product: Product1): Observable<Product1> {
    return this.httpClient.post<Product1>(this.API_PRO, {...product});
  }
  findById(id: number): Observable<Product1> {
    return this.httpClient.get<Product1>(`${this.API_PRO}/${id}`);
  }

  update(id: number, product: Product1): Observable<Product1> {
    return this.httpClient.put<Product1>(`${this.API_PRO}/${id}`, product);
  }

  deleteById(id: number): Observable<Product1> {
    return this.httpClient.delete<Product1>(`${this.API_PRO}/${id}`);
  }
}
