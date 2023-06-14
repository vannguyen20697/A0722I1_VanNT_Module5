import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Level} from '../../model/level';
import {Position} from '../../model/position';
import {Part} from '../../model/part';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../service/employee.service';
import {PartService} from '../../service/part.service';
import {LevelService} from '../../service/level.service';
import {PositionService} from '../../service/position.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  employeeForm: FormGroup;
  levels: Level[];
  positions: Position[];
  parts: Part[];
  p = 1;

  constructor(private employeeService: EmployeeService,
              private partService: PartService,
              private levelService: LevelService,
              private positionService: PositionService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllLevel();
    this.getAllPosition();
    this.getAllPart();
  }

  private getAllEmployee() {
    this.employeeService.findAll().subscribe(next => {
      this.employees = next;
    });
  }

  private getAllLevel() {
    this.levelService.findAll().subscribe(next => {
      this.levels = next;
    });
  }

  private getAllPosition() {
    this.positionService.findAll().subscribe(next => {
      this.positions = next;
    });
  }

  private getAllPart() {
    this.partService.findAll().subscribe(next => {
      this.parts = next;
    });
  }
  getEmployee(id: number) {
    this.employeeService.findById(id).subscribe(next => {
      this.employee = next;
    });
  }

  removeProduct(id) {
    this.employeeService.deleteById(this.employee.id).subscribe(() => {
      this.router.navigateByUrl('/employee');
      this.getAllEmployee();
    });
  }
}
