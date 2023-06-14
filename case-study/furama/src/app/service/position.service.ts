import { Injectable } from '@angular/core';
import {Part} from '../model/part';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  parts: Position[];
  private API_POS = 'http://localhost:3000/positions';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.API_POS);
  }

  public findById(id: number): Observable<Position> {
    return this.httpClient.get<Position>(this.API_POS + '/' + id);
  }
}
