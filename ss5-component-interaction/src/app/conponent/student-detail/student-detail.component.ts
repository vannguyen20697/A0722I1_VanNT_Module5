import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.student = this.studentService.findById(id);
    });
  }

}
