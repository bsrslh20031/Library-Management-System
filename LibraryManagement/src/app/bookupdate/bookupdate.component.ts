import { Component ,OnInit} from '@angular/core';
import{Book} from '../Book';
import { BookService } from '../Book.service';
@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit{
  book:Book=new Book();
  msg:any="";

  constructor(private bookService:BookService){}
  ngOnInit(): void{
    throw new Error('Method not implemented');
  }
bookupdate()
{
  this.bookService.updateBook(this.book).subscribe(data=>{this.msg=data;});
}

}