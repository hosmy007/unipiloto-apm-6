import {Component, OnInit} from '@angular/core';
import { Student } from '../../models/student';
import { Error } from '../../models/error';
import {StudentDBService} from "../../service/student.db.service";
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'student-db-list-app',
  templateUrl: './students.db.component.html',
})
export class StudentsDBComponent implements OnInit {

    title: string = "Students BD";

    student: Student;

    students: Student[];

    vstudenSelected : Student = null;

    vError : Error;

    constructor(private studentDBService: StudentDBService, private http: Http) {

    }

    getStudentsPromesa() {
        console.info("LLegando a solicitar students..");
        this.studentDBService.getStudentsPromesa().then(students => this.students = students);
    }

    getStudentsObservable() {
        console.info("LLegando a solicitar students..");
        this.studentDBService.getStudentsObservable().then(students => this.students = students);
    }

    ngOnInit(): void {
        this.getStudentsPromesa();
    }

    onSelect(student: Student) {
        this.student = student;
    }
    
    buscarStudent( identificacion:string ) : void{
        this.vError = null;
        this.vstudenSelected = null;
        this.studentDBService.buscarStudent( identificacion ).then( student => this.vstudenSelected = student ).catch( this.handleErrorBusqueda );  
        //console.info( this.vstudenSelected );
    }
    private handleErrorBusqueda(error: any): void{        
        this.vError = {
            timestamp: error.json().timestamp,
            status: error.json().status,
            error: error.json().error,
            exception: error.json().exception,
            message: error.json().message,
            path: error.json().path,
        };
        //this.vError = JSON.parse( "{\"path\":\"/students/buscar/5345\"}" );
        //return Promise.reject(error.message || error);
        //let details = error.json().error;
          //  console.log(details);
            //return Observable.throw(new Error(details));
    }
    agregarNuevoPromesa(   identificacion:string,
                    nombres:string,
                    apellidos:string ): void {

            console.info("LLegando ini agregarNuevo..");    

            identificacion = identificacion.trim();                    
            nombres = nombres.trim();
            apellidos = apellidos.trim();       
            
            this.student = null;
            let student : Student = {
                id:0,
                dni: identificacion,
                name:nombres,
                lastName:apellidos 
            };
        console.info("Enviadno s servicio agregarNuevo..");  
        this.studentDBService.createPromesa( student );  
    }

    agregarNuevoObservable(   identificacion:string,
                    nombres:string,
                    apellidos:string ): void {

            console.info("LLegando ini agregarNuevo..");    

            identificacion = identificacion.trim();                    
            nombres = nombres.trim();
            apellidos = apellidos.trim();       
            
            this.student = null;
            let student : Student = {
                id:0,
                dni: identificacion,
                name:nombres,
                lastName:apellidos 
            };
        console.info("Enviadno s servicio agregarNuevo..");  
        this.studentDBService.createPromesa( student );  
    }

    modificarPromesa(   identificacion:string,
                    nombres:string,
                    apellidos:string ): void {

            console.info("LLegando ini agregarNuevo..");    

            identificacion = identificacion.trim();                    
            nombres = nombres.trim();
            apellidos = apellidos.trim();       
            
            this.student = null;
            let student : Student = {
                id:0,
                dni: identificacion,
                name:nombres,
                lastName:apellidos 
            };
        console.info("Enviadno s servicio agregarNuevo..");  
        this.studentDBService.updatePromesa( student );  
    }

    modificarObservable(   identificacion:string,
                    nombres:string,
                    apellidos:string ): void {

            console.info("LLegando ini agregarNuevo..");    

            identificacion = identificacion.trim();                    
            nombres = nombres.trim();
            apellidos = apellidos.trim();       
            
            this.student = null;
            let student : Student = {
                id:0,
                dni: identificacion,
                name:nombres,
                lastName:apellidos 
            };
        console.info("Enviadno s servicio agregarNuevo..");  
        this.studentDBService.updatePromesa( student );  
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
