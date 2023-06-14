import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypes: CustomerType[];
  private API_TYPE = 'http://localhost:3000/customerTypes';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_TYPE);
  }

  public findById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(`${this.API_TYPE}/${id}`);
  }
}
