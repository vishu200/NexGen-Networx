import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseissueService {

  private apiUrl = 'http://localhost:7070/raiseIssue/api/raiseIssue'; 

  constructor(private http: HttpClient) { }

  raiseIssue(issueData: any): Observable<any> {
    return this.http.post(this.apiUrl, issueData,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}
}
