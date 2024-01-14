import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'jquery';
import { Observable, Subscriber } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, private userService: UserService) {
  }

  doPostCall(url: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type':"application/json",
      Authorization: this.userService.authKeyFromSession,
    })
    return this.http.post<any>(url, body,{headers});
  }

  doGetCall(url: string, body: any) {
    const headers = new HttpHeaders({
      Authorization: this.userService.authKeyFromSession,
    })

    return this.http.get<any>(url);
  }

}
