import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  serverUrl: string = 'Some url';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient ) { }

  addUser(form: FormGroup): void {
    let formData = JSON.stringify(form.value);
    console.log(formData);
    // this.http.post(this.serverUrl, formData, this.httpOptions).subscribe();
    console.log('Added user');
  }
}
