import { Component,OnInit} from '@angular/core';
import { Staff } from '../Staff';
import { StaffService } from '../Staff.service';
@Component({
  selector: 'app-staffupdate',
  templateUrl: './staffupdate.component.html',
  styleUrls: ['./staffupdate.component.css']
})
export class StaffupdateComponent implements OnInit{
  staff:Staff=new Staff();
  msg:any="";

  constructor(private staffService:StaffService){}
  ngOnInit(): void {
    throw new Error("Method not implemented. ");
  }
  staffupdate()
  {
    this.staffService.updateStaff(this.staff).subscribe(data=>{this.msg=data;});
  }



}