import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import{Observable} from "rxjs";
import { Student } from "./Student";
@Injectable({
    providedIn:'root'
})
export class StudentService{
    private restUrl='http://localhost:8080'
    constructor (private httpClient:HttpClient){}

    

    getAllStudents():Observable<Student[]>
    {
        return this.httpClient.get<Student[]>(`${this.restUrl}/student/getAllStudents`,{responseType:"json"});
    }

    insertStudents(student:Student):Observable<Object>
    {
        return this.httpClient.post(`${this.restUrl}/student/insertstudents`,student,{responseType:"text"});
    }

    updateStudents(student:Student):Observable<Object>
    {
        return this.httpClient.put(`${this.restUrl}/student/updatestudents`,student,{responseType:"text"});
    }

    deleteStudents(student:Student):Observable<Object>
    {
        return this.httpClient.delete(`${this.restUrl}/student/deletestudents/{id}`,{responseType:"text"});
    }
}
