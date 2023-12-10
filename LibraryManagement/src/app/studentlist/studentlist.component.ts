import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../Student.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students:Student[]=[];
  student:Student=new Student();

  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(data=>{this.students=data;});

  }

}