import { Injectable } from '@angular/core';
import {Status} from '../../model/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statuses: Status[] = [
    { statusNo: '1',
      statusName: 'Sold'
    },
    { statusNo: '2',
      statusName: 'Stock'
    },
  ];

  constructor() { }
  findAll(): Status[] {
    return  this.statuses;
  }
  findById(id: string) {
    return this.statuses.find(status => status.statusNo === id);
  }
}
