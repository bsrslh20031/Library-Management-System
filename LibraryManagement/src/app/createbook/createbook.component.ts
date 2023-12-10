import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../Book.service';
@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  
  constructor(private bookService:BookService ){}

  book:Book=new Book();
  msg:any="";

      ngOnInit(): void {
          throw new Error('Method not implemented');
      }

   createBook()
   {
  this.bookService.insertBook(this.book).subscribe(data=>{this.msg=data;});
  }


  }
