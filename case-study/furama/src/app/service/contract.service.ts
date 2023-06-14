import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API_CON = 'http://localhost:3000/contracts';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_CON);
  }

  save(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.API_CON, contract);
  }
}
