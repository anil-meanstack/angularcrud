import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  backend_url = "http://localhost:3000/";


  constructor(private http:HttpClient) {  }
 
  
    
  get(){
    return this.http.get("http://localhost:3000/users")
  }
  
  abc()
  {
      return [{name : "abc",email : "abc@gmail.com"},{name : "xyz",email : "xyz@gmail.com"}];
   }
  
    register(data:any){
      return this.http.post(this.backend_url+"register",data);
    }
    login(data:any){
      return this.http.post(this.backend_url+"login",data);
    }
    getUserinfo(userId:string){
      
      return this.http.get(this.backend_url+"getUserInfo/"+userId);
    }

    update(userId:any,name:any){
      return this.http.put(this.backend_url+"updateuser/"+userId, name );
    }

    users(data:any){
      return this.http.get(this.backend_url+"users",data);
    }

    saveusers(data:any){
      return this.http.post(this.backend_url+"usersave",data)
    }

    userdelete(id:string){
      return this.http.delete(`${this.backend_url}userdelete/${id}`)
    }
    getcurrentdata(id:string){
      return this.http.get(this.backend_url+"getUserInfo/"+id);
    }

    updateuserdata(id:string,data:any){
      return this.http.put(this.backend_url+"userupdate/"+id ,data); 
    }
} 