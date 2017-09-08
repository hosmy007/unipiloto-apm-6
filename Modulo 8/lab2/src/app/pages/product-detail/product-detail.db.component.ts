import { Component, Input } from '@angular/core';
import { Conductor } from '../../models/conductor';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductDBService} from "../../service/products.db.service";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'product-detail-db',
  templateUrl: './product-detail.db.component.html'
})

export class ProductDetailDBComponent {
  @Input()
  product: Conductor;

  private urlphp = 'http://localhost:8787/cursomovil/conductores_crear_update.php';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private productDBService: ProductDBService, private http: Http) {

  }
  
  actualizar( p: Conductor ): void {
                        
            p.accion = "ACTUALIZAR";
            /*let jsonEnviar:string = JSON.stringify(
                {
                    identificacion: identificacion,nombres:nombres, apellidos:apellidos, telefono:telefono, ciudad:ciudad, correo:correo
                }
            );*/
            console.info( p );
            this.http.post(this.urlphp, p , {headers: this.headers})
                .toPromise()      
                .catch(this.handleError);;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

