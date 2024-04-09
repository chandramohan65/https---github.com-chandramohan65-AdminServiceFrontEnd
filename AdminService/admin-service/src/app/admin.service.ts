import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API="http://localhost:8080";
  public registerAdmin(adminData: any)
  {
    return this.http.post(this.API + '/registerAdmin' , adminData);
  }

  public getAdmins(){
    return this.http.get(this.API+'/getAdmins');
  }

  public deleteAdmin(A_id:any){
    return this.http.delete(this.API+'/deleteAdmin?A_id=' + A_id);
  }

  public updateAdmin(admin: any){
    return this.http.put(this.API +'/updateAdmin', admin);
  }
  constructor(private http: HttpClient) { }
}
