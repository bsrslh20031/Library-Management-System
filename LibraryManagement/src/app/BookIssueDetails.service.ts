import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookIssueDetails } from './BookIssueDetails';

@Injectable({
    providedIn:'root'
})

export class BookIssueDetailsService{
    private restUrl='http://localhost:8080'

    constructor(private httpClient:HttpClient){}
    

    getAllBookIssues():Observable<BookIssueDetails[]>
    {
        return this.httpClient.get<BookIssueDetails[]>(`${this.restUrl}/bookissue/getAllBookIssues`,{responseType:"json"});
    }
    insertBookIssues(bookissuedetails:BookIssueDetails):Observable<Object>
    {
        return this.httpClient.post(`${this.restUrl}/bookissue/insertBookIssues`,bookissuedetails,{responseType:"text"});
    }
    updateBookIssues(bookissuedetails:BookIssueDetails):Observable<Object>
    {
       return this.httpClient.put(`${this.restUrl}/bookissue/updateBookIssues`,bookissuedetails,{responseType:"text"});
    }

}
