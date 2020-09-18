import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl: string = 'Some url';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient ) { }

  addUser(form: FormGroup): void {
    let filteredForm = {};

    for (let prop in form.value) {
      if(prop !== 'confirm') {
        filteredForm[prop] = form.value[prop];
      }
    }

    let formData = JSON.stringify(filteredForm);
    console.log(formData);
    // this.http.post(this.serverUrl, formData, this.httpOptions).subscribe();
    console.log('Added user');
  }
}
