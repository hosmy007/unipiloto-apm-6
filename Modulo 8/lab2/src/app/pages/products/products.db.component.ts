import {Component, OnInit} from '@angular/core';
import { Conductor } from '../../models/conductor';
import {ProductDBService} from "../../service/products.db.service";
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'product-db-list-app',
  templateUrl: './products.db.component.html',
})
export class ProductsDBComponent implements OnInit {

    private urlphp = 'http://localhost:8787/cursomovil/conductores_crear_update.php';
    private headers = new Headers({'Content-Type': 'application/json'});

    title: string = "Conductores en BD";

    selected: Conductor;

    products: Conductor[];

    constructor(private productDBService: ProductDBService, private http: Http) {

    }

    getProducts() {
        console.info("LLegando a solicitar productos..");
        this.productDBService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Conductor) {
        this.selected = product;
    }
    agregarNuevo(   identificacion:string,
                    nombres:string,
                    apellidos:string,
                    telefono:string,
                    ciudad:string,
                    correo:string,
                    accion:string): void {

            identificacion = identificacion.trim();                    
            nombres = nombres.trim();
            apellidos = apellidos.trim();
            telefono = telefono.trim();
            ciudad = ciudad.trim();
            correo = correo.trim();

            if (!nombres || ! identificacion || !apellidos || !telefono || !ciudad || !correo ) { 
                return; 
            }
            this.selected = null;
            let condu : Conductor = {
                id:"",
                identificacion: identificacion,
                nombres:nombres,
                apellidos:apellidos,
                telefono:telefono,
                ciudad:ciudad,
                correo:correo,
                accion:"NUEVO"
            };
            /*let jsonEnviar:string = JSON.stringify(
                {
                    identificacion: identificacion,nombres:nombres, apellidos:apellidos, telefono:telefono, ciudad:ciudad, correo:correo
                }
            );*/
            console.info( condu );
            this.http.post(this.urlphp, condu , {headers: this.headers})
                .toPromise()      
                .catch(this.handleError);;

            this.getProducts();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
