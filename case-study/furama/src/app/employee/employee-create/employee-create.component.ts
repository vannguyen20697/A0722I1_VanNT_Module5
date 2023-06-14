import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Level} from '../../model/level';
import {Position} from '../../model/position';
import {Part} from '../../model/part';
import {EmployeeService} from '../../service/employee.service';
import {PartService} from '../../service/part.service';
import {LevelService} from '../../service/level.service';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  levels: Level[];
  positions: Position[];
  parts: Part[];
  rfProduct: FormGroup;
  constructor(private employeeService: EmployeeService,
              private partService: PartService,
              private levelService: LevelService,
              private positionService: PositionService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllLevel();
    this.getAllPosition();
    this.getAllPart();
    this.rfProduct = new FormGroup({
      idEmployee: new FormControl('', [
        Validators.required,
      ]),
      nameEmployee: new FormControl('', [
        Validators.required,
      ]),
      viTriEmployee: new FormControl('', [
        Validators.required,
      ]),
      trinhDoEmployee: new FormControl('', [
        Validators.required,
      ]),
      boPhanEmployee: new FormControl('', [
        Validators.required,
      ]),
      dateEmployee: new FormControl('', [
        Validators.required,
      ]),
      idCardEmployee: new FormControl('', [
        Validators.required,
      ]),
      salaryEmployee: new FormControl('', [
        Validators.required,
      ]),
      phoneEmployee: new FormControl('', [
        Validators.required,
      ]),
      emailEmployee: new FormControl('', [
        Validators.required,
      ]),
      addressEmployee: new FormControl('', [
        Validators.required,
      ])
    });
  }

  private getAllLevel() {
    this.levelService.findAll().subscribe(data => {
      this.levels = data;
    });
  }

  private getAllPosition() {
    this.positionService.findAll().subscribe(data => {
      this.positions = data;
    });
  }

  private getAllPart() {
    this.partService.findAll().subscribe(data => {
      this.parts = data;
    });
  }
  addProduct() {
    const employee = this.rfProduct.value;
    this.employeeService.save(employee).subscribe(data => {
      this.router.navigateByUrl('/employee');
    });
  }
}
