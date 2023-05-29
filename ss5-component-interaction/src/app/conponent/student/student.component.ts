import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [
    { id: 1,
      name: 'Nhan',
      score: 1,
      vote: 2,
    },
    {
      id: 2,
      name: 'Thanh',
      score: 10,
      vote: 3,
    },
    {
      id: 3,
      name: 'Hoa',
      score: 6,
      vote: 4,
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }
  methodCreateStudent(student: Student) {
    this.students.push({...student, vote: 0});
  }
}
