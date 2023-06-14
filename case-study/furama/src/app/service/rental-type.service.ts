import { Injectable } from '@angular/core';
import {RentalType} from '../model/RentalType';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalTypeService {
  rentalTypes: RentalType[];
  private API_REN = 'http://localhost:3000/rentals';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<RentalType[]> {
    return this.httpClient.get<RentalType[]>(this.API_REN);
  }

  public findById(id: number): Observable<RentalType> {
    return this.httpClient.get<RentalType>(this.API_REN + '/' + id);
  }
}
