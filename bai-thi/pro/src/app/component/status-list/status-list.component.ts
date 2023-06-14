import { Component, OnInit } from '@angular/core';
import {Status} from '../../model/status';
import {StatusService} from '../../service/status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  statuses: Status[];
  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.getAllStatus();
  }

  private getAllStatus() {
    this.statusService.findAll().subscribe(next => {
      this.statuses = next;
    });
  }
}
