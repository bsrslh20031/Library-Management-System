import{ Injectable } from '@angular/core';;
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './Book';
@Injectable({
    providedIn:'root'
})
export class BookService{
    private restUrl='http://localhost:8080'
    constructor(private httpClient:HttpClient){}
    

    getAllBooks():Observable<Book[]>
    {
        return this.httpClient.get<Book[]>(`${this.restUrl}/book/getAllBooks`,{responseType:"json"});
    }
    insertBook(book:Book):Observable<Object>
    {
        return this.httpClient.post(`${this.restUrl}/book/insertBooks`,book,{responseType:"text"});
    }
    updateBook(book:Book):Observable<Object>
    {
        return this.httpClient.put(`${this.restUrl}/book/updateBooks`,book,{responseType:"text"});
    }
    deleteBook(book:Book):Observable<Object>
    {
        return this.httpClient.delete(`${this.restUrl}/book/deleteBook/{id}`,{responseType:"text"});
    }
}