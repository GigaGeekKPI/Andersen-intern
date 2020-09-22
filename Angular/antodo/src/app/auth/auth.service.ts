import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from 'rxjs/operators';
import { tokenGetter } from './utils/tokenGetter';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper: JwtHelperService;

  constructor(private http: HttpClient) {
    this.helper = new JwtHelperService();
  }

  signUp(user: User): Observable<User> {
    const url = `${environment.baseURL}/auth/signup`;
    return this.http.post<User>(url, user);
  }

  signIn(user: User) {
    const url = `${environment.baseURL}/auth/signin`;
    return this.http.post<Response>(url, user).pipe(tap(tokenObj => {
      // const decodedToken = this.helper.decodeToken(tokenObj.accessToken);

      localStorage.setItem('access_token', tokenObj.accessToken);
    }));
  }

  isUserAuthenticated(): boolean {
    const existingToken = tokenGetter();

    return existingToken && !this.helper.isTokenExpired(existingToken);
  }
}

interface Response {
  accessToken: string
}