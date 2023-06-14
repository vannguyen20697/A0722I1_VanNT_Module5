import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Level} from '../model/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels: Level[];
  private API_LEVEL = 'http://localhost:3000/levels';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Level[]> {
    return this.httpClient.get<Level[]>(this.API_LEVEL);
  }

  public findById(id: number): Observable<Level> {
    return this.httpClient.get<Level>(this.API_LEVEL + '/' + id);
  }
}
