import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teachers/teacher.component';
import { StudentComponent } from './components/students/student.component';
import { TeacherDetailComponent } from './components/teachers/detail-teacher/detail.teacher.component';
import { StudentDetailComponent } from './components/students/detail-students/detail.student.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    TeacherComponent,    
    StudentComponent,
    TeacherDetailComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
