import { Component } from '@angular/core';

export class Vehicule {
  public brand: string;
  public model: string;
  public color: string;
  public plate: string;
  public capacity: string;
  public build_year: number;
  
}
export class Driver{
  public id: number;
  public licence: string;
  public firt_name: string;
  public last_name: string;
  public age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  vVehiculoSeleccionado: Vehicule;
  vVehiculos: Vehicule[] = VEHICULES;
  
  onSelect( v:Vehicule ){
    
    this.vVehiculoSeleccionado = v;
  }

}

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

const VEHICULES: Vehicule[] = [
  {
    brand: "Brand 1",
    model: "Ford Fiesta 2014",
    color: "Red",
    plate: "Plate 1",
    capacity: "5 Personas",
    build_year: 2014
  },
  {
    brand: "Brand 2",
    model: "Ford Fiesta 2015",
    color: "Yellow",
    plate: "Plate 2",
    capacity: "6 Personas",
    build_year: 2015
  },
  {
    brand: "Brand 3",
    model: "Ford Fiesta 2016",
    color: "Blue",
    plate: "Plate 3",
    capacity: "4 Personas",
    build_year: 2016
  }
];
