import { Injectable } from '@angular/core';
import {Level} from '../model/level';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Part} from '../model/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  parts: Part[];
  private API_PART = 'http://localhost:3000/parts';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Part[]> {
    return this.httpClient.get<Part[]>(this.API_PART);
  }

  public findById(id: number): Observable<Part> {
    return this.httpClient.get<Part>(this.API_PART + '/' + id);
  }
}
