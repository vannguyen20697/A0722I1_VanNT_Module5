import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {PartService} from '../../service/part.service';
import {LevelService} from '../../service/level.service';
import {PositionService} from '../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Level} from '../../model/level';
import {Position} from '../../model/position';
import {Part} from '../../model/part';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeForm: FormGroup;
  employees: Employee[];
  levels: Level[];
  positions: Position[];
  parts: Part[];
  id: number;

  constructor(private employeeService: EmployeeService,
              private partService: PartService,
              private levelService: LevelService,
              private positionService: PositionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      idEmployee: new FormControl(''),
      nameEmployee: new FormControl(''),
      viTriEmployee: new FormControl(''),
      trinhDoEmployee: new FormControl(''),
      boPhanEmployee: new FormControl(''),
      dateEmployee: new FormControl(''),
      idCardEmployee: new FormControl(''),
      salaryEmployee: new FormControl(''),
      phoneEmployee: new FormControl(''),
      emailEmployee: new FormControl(''),
      addressEmployee: new FormControl('')
    });
    this.levelService.findAll().subscribe(data => {
      this.levels = data;
    });
    this.positionService.findAll().subscribe(data => {
      this.positions = data;
    });
    this.partService.findAll().subscribe(data => {
      this.parts = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.employeeService.findById(this.id).subscribe(employee => {
        this.employeeForm.patchValue(employee);
        this.employeeForm.get('viTriEmployee').setValue(employee.viTriEmployee.id);
        this.employeeForm.get('trinhDoEmployee').setValue(employee.trinhDoEmployee.id);
        this.employeeForm.get('boPhanEmployee').setValue(employee.boPhanEmployee.id);
      });
    });
  }
  updateCustomer(id: number) {
    const employee = this.employeeForm.value;
    employee.viTriEmployee = this.positions.find(viTriEmployee => viTriEmployee.id === +employee.viTriEmployee);
    employee.trinhDoEmployee = this.levels.find(trinhDoEmployee => trinhDoEmployee.id === +employee.trinhDoEmployee);
    employee.boPhanEmployee = this.parts.find(boPhanEmployee => boPhanEmployee.id === +employee.boPhanEmployee);
    this.employeeService.update(id, employee).subscribe(() => {
      this.router.navigateByUrl('/employee');
    });
  }
}
