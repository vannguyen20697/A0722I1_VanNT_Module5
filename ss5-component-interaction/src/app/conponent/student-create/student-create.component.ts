import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  @Output() onCreate = new EventEmitter<Student>();
  studentCreate: Student;
  rfStudent: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfStudent = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      score: new FormControl('', [
        Validators.required,
        this.checkScore
      ])
    });
  }

  addStudent(name: string, score: number) {
    this.studentCreate = {
      name,
      score: +score
    };
    this.onCreate.emit(this.studentCreate);
  }

  checkScore(control: AbstractControl): ValidationErrors | null {
    const score = +control.value;
    if (score < 0 || score > 10) {
      return {invalidScore: true};
    }
    return null;
  }
}
