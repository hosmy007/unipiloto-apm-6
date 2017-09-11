import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'
import {Student} from "../models/student";

@Injectable()
export class StudentDBService {

  private uRI = 'http://localhost:8080/students';
  private headers = new Headers({'Content-Type': 'application/json'});
  

    constructor(private http: Http) { }

    buscarStudent( identificacion:string ): Promise<Student> {
        console.info("StudentDBService. buscando ..");        
        const url = `${this.uRI}/buscar/${identificacion}`;
        let studentB : Student;
        return this.http
            .get(url, {headers: this.headers})
            .toPromise()     
            .then( response => response.json() as Student) 
            .catch( this.handleError );        
    }

    getStudentsPromesa(): Promise<Student[]> {
        console.info("StudentDBService.getStudents..");        
        return this.http.get( this.uRI )
            .toPromise()
            .then(response => response.json() as Student[])
            .catch(this.handleError);
    }
    getStudentsObservable(): Promise<Student[]> {
        console.info("StudentDBService.getStudents..");        
        return this.http.get( this.uRI )
            .toPromise()
            .then(response => response.json() as Student[])
            .catch(this.handleError);
    }    

    updatePromesa(student: Student) : Promise<Student> {
        const url = `${this.uRI}/${student.id}`;
        return this.http
        .put(url, JSON.stringify(student), {headers: this.headers})
        .toPromise()     
        .then(() => student) 
        .catch(this.handleError);
  }

  createPromesa( student: Student ) : Promise<Student> {

    console.info(JSON.stringify(student));    

    let studentRetorno = this.http        
      .post(this.uRI, JSON.stringify(student), {headers: this.headers})
      .toPromise()      
      .then( res => console.info( res.json() ) ) 
      .catch(this.handleError);
          
    return studentRetorno;
  }

    private handleError(error: any): Promise<any> {
        //console.error('Changos.. errorr:::', error._body); 
        return Promise.reject( error );
    }

}
