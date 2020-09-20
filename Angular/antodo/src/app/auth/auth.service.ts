import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  signUp(user: any): Observable<any> {
    const url = `${environment.baseURL}/auth/signup`;
    return this.http.post<any>(url, user);
  }
}
