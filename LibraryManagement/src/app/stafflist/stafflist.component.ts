import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../Staff';
import { StaffService } from '../Staff.service';
@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit{
  staffs:Staff[]=[];
  staff:Staff=new Staff();

  constructor(private staffService:StaffService){}
  ngOnInit(): void {
    this.getAllStaffs();
  }

  getAllStaffs(){
    this.staffService.getAllStaff().subscribe(data=>{this.staffs=data;});
  }
  

}