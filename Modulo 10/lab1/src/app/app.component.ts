import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/personas');
  }
  saveFirstNameAndLastName(cedula: string, firstName: string, lastName: string) {
    this.item = this.db.object("/personas/" + cedula);
    this.item.set({ cedula: cedula, firstname: firstName, lastname: lastName });    
    //this.item = this.db.object("/personas/1/" + cedula);
    //this.item.set({ cedula: cedula, firstname: firstName, lastname: lastName });    
  }
  
  delete() {
    this.item.remove();
  }
}
