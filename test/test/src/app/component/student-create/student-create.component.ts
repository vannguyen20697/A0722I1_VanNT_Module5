import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {StudentService} from '../service/student.service';
import {Class} from '../../model/class';
import {ClassService} from '../service/class.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  rfStudent: FormGroup;
  classes: Class[];


  constructor(private studentService: StudentService,
              private classService: ClassService) { }

  ngOnInit(): void {
    this.rfStudent = new FormGroup({
      id: new FormControl('', [
        Validators.required,
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      score: new FormControl('', [
        Validators.required,
        this.checkScore
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      cla: new FormControl('', [
        Validators.required,
      ]),
    });
    this.classes = this.classService.findAll();
  }
  checkScore(control: AbstractControl): ValidationErrors | null {
    const score = +control.value;
    if (score < 0 || score > 10) {
      return {invalidScore: true};
    }
    return null;
  }
  addStudent() {
    const student = this.rfStudent.value;
    student.cla = this.classService.findById(+student.cla);
    console.log(student.cla);
    this.studentService.save(student);
  }
}
