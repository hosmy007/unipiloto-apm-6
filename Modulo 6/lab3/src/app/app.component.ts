import { Component } from '@angular/core';
import {Teacher} from '../models/teacher';
import {Student} from '../models/student';

const STUDENTS: Student[] = [
  {
    cedula: "123456789",
    nombres: "Rafael",
    apellidos: "Blanco B"
  },
  {
    cedula: "123456789",
    nombres: "Gisella",
    apellidos: "Julio J"
  },
  {
    cedula: "1474444",
    nombres: "Mariana",
    apellidos: "Blanco Julio"
  }
];

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del Año";

  vStudentSelected: Student;
  vTeacherSelected: Teacher;

  vStudents: Student[] = STUDENTS;
  vTeachers: Teacher[] = TEACHERS;

  onSelectStudents(s: Student){
    this.vStudentSelected = s;
  }
  onSelectTeachers(s: Teacher){
    this.vTeacherSelected = s;
  }
}