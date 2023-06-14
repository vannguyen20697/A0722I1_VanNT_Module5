import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_CUS = 'http://localhost:3000/customers';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_CUS);
  }
  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_CUS, {...customer});
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.API_CUS}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.API_CUS}/${id}`, customer);
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.API_CUS}/${id}`);
  }
  search(rfSearch: any) {
    let key = '?';
    const nameCustomer = rfSearch.nameCustomer;
    if (nameCustomer !== '' && nameCustomer !== null) {
      key += 'nameCustomer_like=' + nameCustomer + '&';
    }
    return this.httpClient.get<Customer[]>(this.API_CUS + key);
  }
}
