import { Injectable } from '@angular/core';
import {Conductor} from "../models/conductor";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductDBService {

  private productsURI = 'http://localhost:8787/cursomovil/conductores.php';
  

    constructor(private http: Http) { }

    getProducts(): Promise<Conductor[]> {
        console.info("ProductDBService.getProducts..");
        return this.http.get(this.productsURI)
            .toPromise()
            .then(response => response.json() as Conductor[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}
