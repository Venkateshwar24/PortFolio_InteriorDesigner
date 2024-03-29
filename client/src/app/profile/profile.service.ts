import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private ServerUrl = "https://portfolio-kirthi.onrender.com";
 adminUserName = "kirthi"
 adminpassword = "Noodletheory"

  constructor(private http:HttpClient) {
   }


   authenticate(username:string, password:string) : boolean{
         if((username === this.adminUserName) && (password===this.adminpassword ))
         return true
        else
        return false
   }
   getProjects(){
    return this.http.get<any>(`${this.ServerUrl}/projects`);
   }

   getCompanies(){
    return this.http.get<any>(`${this.ServerUrl}/experience`);
   }

   postProjects(projectData){
      return this.http.post<any>(`${this.ServerUrl}/projects`,projectData);
   }

   postExperience(experienceData){
     return this.http.post<any>(`${this.ServerUrl}/experience`,experienceData);
   }

   patchExpProjects(formData,exp_id){
    return this.http.patch<any>(`${this.ServerUrl}/experience/${exp_id}`,formData);
   }
}
