import { Component ,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../Book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  books:Book[]=[];
  book:Book=new Book();

  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(){
    this.bookService.getAllBooks().subscribe(data=>{this.books=data;})
    
  }

}
