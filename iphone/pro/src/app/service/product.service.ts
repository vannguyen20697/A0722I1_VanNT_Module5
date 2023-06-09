import {Injectable} from '@angular/core';
import {Product1} from '../model/product1';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRO = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

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

  search(rfSearch: any) {
    let key = '?';
    const productName = rfSearch.productName;
    if (productName !== '' && productName !== null) {
      key += 'productName_like=' + productName + '&';
    }
    const productPrice = rfSearch.productPrice;
    if (productPrice !== '' && productPrice !== null) {
      key += 'productPrice_like=' + productPrice + '&';
    }
    const proDayStart = rfSearch.proDayStart;
    if (proDayStart !== '' && proDayStart !== null) {
      key += 'productDay_gte=' + proDayStart + '&';
      // gte >=
    }
    const proDayEnd = rfSearch.proDayEnd;
    if (proDayStart !== '' && proDayEnd !== null) {
      key += 'productDay_lte=' + proDayEnd + '&';
      // lte <=
    }
    return this.httpClient.get<Product1[]>(this.API_PRO + key);
  }
}
