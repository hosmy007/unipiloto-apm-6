import { Component } from '@angular/core';
import {Driver} from '../../models/driver';

const DRIVERS: Driver[] = [
  {
    id:1,
    licence:"Licencia Basica 1",
    firt_name: "Rafael Guillermo 1",
    last_name: "Blanco",
    age: 30
  },
  {
    id:2,
    licence:"Licencia Basica 2",
    firt_name: "Rafael Guillermo 2",
    last_name: "Blanco Banquez",
    age: 35
  }
];

@Component({
  selector: 'driver-component',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  title: string = "DriverComponent...";

  vStudents: Driver[] = DRIVERS;
}