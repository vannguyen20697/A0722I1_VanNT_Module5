import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  @Output() onCreate = new EventEmitter<Student>();
  studentCreate: Student;
  constructor() { }

  ngOnInit(): void {
  }
  addStudent(name: string, score: number) {
    this.studentCreate = {
      name,
      score
    };
    this.onCreate.emit(this.studentCreate);
  }
}
