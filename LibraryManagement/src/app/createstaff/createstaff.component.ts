import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../Staff';
import { StaffService } from '../Staff.service';
@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit{

  constructor(private staffService:StaffService){}

  staff:Staff=new Staff();
  msg:any="";

  ngOnInit(): void {

    throw new Error("Method not implemented");
  }



  createStaff(){
    this.staffService.insertStaff(this.staff).subscribe(data=>{this.msg=data;});
  }

}