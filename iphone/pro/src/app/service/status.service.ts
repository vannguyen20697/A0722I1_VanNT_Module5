import { Injectable } from '@angular/core';
import {Status} from '../model/status';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statuses: Status[];
  private API_STA = 'http://localhost:3000/statuses';
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(this.API_STA);
  }

  public findById(id: number): Observable<Status> {
    return this.httpClient.get<Status>(this.API_STA + '?statusNo=' + id);
  }
}
