import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookIssueDetails } from '../BookIssueDetails';
import { BookIssueDetailsService } from '../BookIssueDetails.service';
@Component({
  selector: 'app-bookissuelist',
  templateUrl: './bookissuelist.component.html',
  styleUrls: ['./bookissuelist.component.css']
})
export class BookissuelistComponent implements OnInit{

  bookissuedetails:BookIssueDetails[]=[];
  bookissuedetail:BookIssueDetails=new BookIssueDetails();


  constructor(private bookissuedetailsService:BookIssueDetailsService){}
  ngOnInit(): void {
    this.getAllBookIssueDetails();
  }
  getAllBookIssueDetails()
  {
    this.bookissuedetailsService.getAllBookIssues().subscribe(data=>{this.bookissuedetails=data;})
  }

}