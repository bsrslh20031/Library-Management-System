import { Component,OnInit} from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../Student.service';
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit{
  student:Student=new Student();
  msg:any="";

  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    throw new Error("Method not implemented. ");
  }
  studentupdate()
  {
    this.studentService.updateStudents(this.student).subscribe(data=>{this.msg=data;});
  }


  
}