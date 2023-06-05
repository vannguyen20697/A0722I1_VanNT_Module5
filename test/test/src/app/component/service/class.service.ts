import {Injectable} from '@angular/core';
import {Class} from '../../model/class';
import {Student} from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  classes: Class[] = [
    {
      classId: 1,
      className: 'A7'
    },
    {
      classId: 2,
      className: 'A9'
    }
  ];

  constructor() {
  }

  findAll(): Class[] {
    return this.classes;
  }

  findById(id: number) {
    return this.classes.find(cla => cla.classId === id);  }

}
