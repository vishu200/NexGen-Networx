import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  private apiUrl='http://localhost:6060/registration/api/existingUserLogin';

  constructor(private http:HttpClient) { };

  loginUser(logindata:{email:string,password:string}):Observable<any>
  {
    return this.http.post(this.apiUrl,logindata,{responseType:'text'});
  }

}
