import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookIssueDetails } from '../BookIssueDetails';
import { BookIssueDetailsService } from '../BookIssueDetails.service';
@Component({
  selector: 'app-createbookissuedetail',
  templateUrl: './createbookissuedetail.component.html',
  styleUrls: ['./createbookissuedetail.component.css']
})
export class CreatebookissuedetailComponent implements OnInit {

  constructor(private bookissuedetailService:BookIssueDetailsService){}

  bookissuedetail:BookIssueDetails=new BookIssueDetails();
  msg:any="";

  ngOnInit(): void {
    throw new Error("Method not implemented");
  }

  createBookIssueDetail(){
    this.bookissuedetailService.insertBookIssues(this.bookissuedetail).subscribe(data=>{this.msg=data;});
  }

}

