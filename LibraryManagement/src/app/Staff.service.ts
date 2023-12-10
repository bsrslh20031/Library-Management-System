import{ Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './Staff';
@Injectable({
    providedIn:'root'
})
export class StaffService{
    private restUrl='http://localhost:8080'

    constructor(private httpClient:HttpClient){}
    
    getAllStaff():Observable<Staff[]>
    {
        return this.httpClient.get<Staff[]>(`${this.restUrl}/staff/getAllStaffs`,{responseType:'json'});
    }
    insertStaff(staff:Staff):Observable<Object>
    {
        return this.httpClient.post(`${this.restUrl}/staff/insertstaff`,staff,{responseType:"text"});
    }
    updateStaff(staff:Staff):Observable<Object>
    {
        return this.httpClient.put(`${this.restUrl}/staff/updatestaff`,staff,{responseType:"text"});
    }

}