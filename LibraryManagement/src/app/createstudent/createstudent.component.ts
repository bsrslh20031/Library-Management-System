import { Component ,OnInit} from '@angular/core';
import{Router} from'@angular/router';
import { Student } from '../Student';
import { StudentService } from '../Student.service';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  constructor(private studentService:StudentService){}

  student:Student=new Student();
  msg:any="";
  
  ngOnInit(): void {
    throw new Error('Method not implemented');
}

createStudent()
{
this.studentService.insertStudents(this.student).subscribe(data=>{this.msg=data;});
}





}
