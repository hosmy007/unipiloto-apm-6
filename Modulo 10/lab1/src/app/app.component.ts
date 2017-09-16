import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user2: Observable<firebase.User>;

  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  public user: any;

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      user => this.user = user);
  }
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, private auth: AuthService) {

    this.user = afAuth.authState;

    this.items = db.list('/personas');
    /*this.items = db.list('/personas', {
      query: {  
        orderByChild: 'cedula',      
        equalTo: '3'
      }
    });*/
  }
  saveFirstNameAndLastName(cedula: string, firstName: string, lastName: string) {
    this.item = this.db.object("/personas/" + cedula);
    this.item.set({ cedula: cedula, firstname: firstName, lastname: lastName });        
    //this.item.update({ lastname: lastName });    
  }
  
  delete() {
    this.item.remove();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
