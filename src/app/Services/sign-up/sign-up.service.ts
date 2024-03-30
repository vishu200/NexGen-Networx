import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {


  private apiUrl="http://localhost:6060/registration/api/addUser";
  constructor(private http: HttpClient) { }

  signup(userdata :any):Observable<any>{
    return this.http.post<any>(this.apiUrl,userdata,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }
}
