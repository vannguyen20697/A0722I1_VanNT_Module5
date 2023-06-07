import { Injectable } from '@angular/core';
import {Student} from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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
  findAll(): Student[] {
    return  this.students;
  }
  save(student: Student) {
    this.students.push({...student, vote:0, id: this.students.length + 1});
  }
  findById(id: number): Student {
    return this.students.filter(it => it.id === id)[0];
  }
}
