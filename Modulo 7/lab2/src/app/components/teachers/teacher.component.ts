import { Component } from '@angular/core';
import {Teacher} from '../../models/teacher';

const TEACHERS: Teacher[] = [
  {
    cedula: "123-456-789",
    nombres: "Profesor Rafael",
    apellidos: "Profesor Blanco B"
  },
  {
    cedula: "12-345-6789",
    nombres: "Profesor Gisella",
    apellidos: "Profesor Julio J"
  },
  {
    cedula: "147-444-4",
    nombres: "Profesor Mariana",
    apellidos: "Profesor Blanco Julio"
  }
];

@Component({
  selector: 'teacher-component',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  title: string = "Teachers....";

  vTeacherSelected: Teacher;

  vTeachers: Teacher[] = TEACHERS;

  onSelectTeachers(s: Teacher){
    this.vTeacherSelected = s;
  }
}