import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title = 'Estoy en página HOME';

  constructor() { }

  ngOnInit() {
    this.title = 'Ahora e cambiado el valor de TITLE';
  }

}
