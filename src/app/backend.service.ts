import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getsignup():Observable<any> {
    return this.http.get(`${this.uri}/signup`);
  }
  postsignup(data: Object):Observable<object> {
    return this.http.post(`${this.uri}/signup`,data);
  }

  getLogin():Observable<any>{
    return this.http.get(`${this.uri}/login`);
  }

  postLogin(data:Object):Observable<object>{
    return this.http.post(`${this.uri}/login`,data);
  }
}
