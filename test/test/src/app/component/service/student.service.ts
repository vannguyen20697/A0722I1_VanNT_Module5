import {Injectable} from '@angular/core';
import {Student} from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      name: 'Nhan',
      score: 9,
      address: 'Hue',
      cla: {
        classId: 1,
        className: 'A7'
      }
    },
    {
      id: 2,
      name: 'Thanh',
      score: 10,
      address: 'Da Nang',
      cla: {
        classId: 2,
        className: 'A9'
      }
    },
    {
      id: 3,
      name: 'Hoa',
      score: 6,
      address: 'Gia Lai',
      cla: {
        classId: 1,
        className: 'A7'
      }
    }
  ];

  constructor() {
  }

  findAll(): Student[] {
    return this.students;
  }

  save(student: Student) {
    this.students.push(student);
    // this.students.push({...student, id: this.students.length + 1});
  }

  findById(id: number) {
    return this.students.find(student => +student.id === id);
  }
  public deleteById(id: number) {
    this.students = this.students.filter(student => {
      return student.id !== id;
    });
  }
}
