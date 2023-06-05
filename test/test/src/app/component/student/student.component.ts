import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  students: Student[];
  student: Student;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.findAll();
  }

  changeStudent(student: any) {

  }

  ngOnDestroy(): void {

  }
  getStudent(id: number) {
    this.student = this.studentService.findById(id);
    debugger
  }

  removeStudent(id: number ) {
    debugger
    this.student = this.studentService.findById(this.student.id);
    this.studentService.deleteById(this.student.id);
    this.students = this.studentService.findAll();
  }
}
