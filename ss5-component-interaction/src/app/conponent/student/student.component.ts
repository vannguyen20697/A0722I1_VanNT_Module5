import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  studentDetail: Student = undefined;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students =  this.studentService.findAll();
  }
  methodCreateStudent(student: Student) {
    this.students.push({...student, vote: 0});
  }

  changeStudent(student: Student) {
    this.studentDetail = student;

  }
}
