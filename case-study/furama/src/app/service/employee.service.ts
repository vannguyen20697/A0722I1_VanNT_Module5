import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_EMP = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_EMP);
  }
  save(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_EMP, {...employee});
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_EMP}/${id}`);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.API_EMP}/${id}`, employee);
  }

  deleteById(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.API_EMP}/${id}`);
  }
}
