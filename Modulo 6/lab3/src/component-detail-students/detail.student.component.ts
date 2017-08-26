import { Component, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'detail-student-component',
  templateUrl: './detail.student.component.html',
  styleUrls: ['./detail.student.component.css']
})

export class StudentDetailComponent {
  @Input()
  vStudent: Student;
}