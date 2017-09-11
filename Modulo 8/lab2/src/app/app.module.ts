import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { ProductsService } from "./service/products.service";
import { ProductDBService } from './service/products.db.service';
import {StudentDBService} from "./service/student.db.service";
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDBComponent } from './pages/products/products.db.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductDetailDBComponent } from './pages/product-detail/product-detail.db.component';
import { HomeComponent } from './pages/home/home.component';
import {StudentsDBComponent} from "./pages/students/students.db.component";
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDBComponent,
    ProductDetailComponent,
    ProductDetailDBComponent,
    HomeComponent,
    StudentsDBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [    
    ProductsService,
    ProductDBService,   
    StudentDBService,  
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
