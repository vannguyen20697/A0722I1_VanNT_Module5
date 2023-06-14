import { Injectable } from '@angular/core';
import {Service} from '../model/service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private API_SER = 'http://localhost:3000/services';
  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  findAll(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.API_SER);
  }
  save(service: Service): Observable<Service> {
    return this.httpClient.post<Service>(this.API_SER, {...service});
  }

  findById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`${this.API_SER}/${id}`);
  }

  update(id: number, service: Service): Observable<Service> {
    return this.httpClient.put<Service>(`${this.API_SER}/${id}`, service);
  }

  deleteById(id: number): Observable<Service> {
    return this.httpClient.delete<Service>(`${this.API_SER}/${id}`);
  }
}
