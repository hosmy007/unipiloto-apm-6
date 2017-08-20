import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  quantity: number;
}
class Person{

    private id:number;
    private age:number;
    private name:string;
    private lastname:string;
    
    /**
     * 
     * @param id 
     * @param age 
     * @param name 
     * @param lastname 
     */
    constructor( id:number, age:number, name:string, lastname:string ){
        this.id = id;
        this.age = age;
        this.lastname = lastname;
        this.name = name;
    }    
	  getId(): number{
		  return this.id;
    }
    getAge(): number{
		  return this.age;
    }
    getName(): string{
		  return this.name;
    }
    getLastname(): string{
		  return this.lastname;
	  }
}

class Student extends Person{

    private classes:string;
    private grade:number;
    private glaup:string;

    /**
     * 
     * @param id 
     * @param age 
     * @param name 
     * @param lastname 
     * @param classes 
     * @param grade 
     * @param glaup 
     */
    constructor( id:number, age:number, name:string, lastname:string, classes:string, grade:number, glaup:string ){
        super( id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.glaup = glaup;        
    }
    getGrade(): number{
		  return this.grade;
    }
    getGlaup(): string{
		  return this.glaup;
    }         
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = "El producto del Año";

  product: Product = {
    id: 2,
    name: "Samsung galaxy 7",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20,
  };

  student1 = new Student(1,20,"Rafael 1 Guillermo","Blanco 1 Banquez", "Matemáticas", 10, "otra cosa212" );

}
