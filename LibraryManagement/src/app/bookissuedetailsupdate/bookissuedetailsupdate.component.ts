import { Component,OnInit } from '@angular/core';
import { BookIssueDetails } from '../BookIssueDetails';
import { BookIssueDetailsService } from '../BookIssueDetails.service';
@Component({
  selector: 'app-bookissuedetailupdate',
  templateUrl: './bookissuedetailupdate.component.html',
  styleUrls: ['./bookissuedetailupdate.component.css']
})
export class BookissuedetailupdateComponent implements OnInit {
  bookissuedetail:BookIssueDetails=new BookIssueDetails();
  msg:any="";

  constructor(private bookissuedetailService:BookIssueDetailsService){}
  ngOnInit(): void{
    throw new Error('Method not implemented');
  }
  bookissuedetailupdate()
{
  this.bookissuedetailService.updateBookIssues(this.bookissuedetail).subscribe(data=>{this.msg=data;});
}



}
