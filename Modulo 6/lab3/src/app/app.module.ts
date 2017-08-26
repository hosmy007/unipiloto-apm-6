import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StudentDetailComponent} from '../component-detail-students/detail.student.component';
import {TeacherDetailComponent} from '../component-detail-teacher/detail.teacher.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }