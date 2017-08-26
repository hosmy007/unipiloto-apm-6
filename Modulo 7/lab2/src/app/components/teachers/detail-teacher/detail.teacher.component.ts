import { Component, Input } from '@angular/core';
import {Teacher} from '../../../models/teacher';

@Component({
  selector: 'detail-teacher-component',
  templateUrl: './detail.teacher.component.html',
  styleUrls: ['./detail.teacher.component.css']
})

export class TeacherDetailComponent {

  title: string = "Detalle del Profesor";

  @Input()
  vTeacher: Teacher;
}