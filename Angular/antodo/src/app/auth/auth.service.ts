import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  signUp(user: User): Observable<User> {
    const url = `${environment.baseURL}/auth/signup`;
    return this.http.post<User>(url, user);
  }

  signIn(user: User): Observable<User> {
    const url = `${environment.baseURL}/auth/signin`;
    console.log('Signed In with', user.username)
    return this.http.post<User>(url, user);
  }
}
