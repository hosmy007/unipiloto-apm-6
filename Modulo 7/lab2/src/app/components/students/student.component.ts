import { Component } from '@angular/core';
import {Student} from '../../models/student';

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

@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title: string = "StudentComponent...";

  vStudentSelected: Student;

  vStudents: Student[] = STUDENTS;

  onSelectStudents(s: Student){
    this.vStudentSelected = s;
  }
}