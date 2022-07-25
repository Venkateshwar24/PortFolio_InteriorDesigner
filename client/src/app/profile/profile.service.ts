import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) {
   }

   getProjects(){
    return this.http.get<any>("http://localhost:7000/projects");
   }

   getCompanies(){
    return this.http.get<any>("http://localhost:7000/experience");
   }
}