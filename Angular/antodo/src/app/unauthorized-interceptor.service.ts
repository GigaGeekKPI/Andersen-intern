import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptorService implements HttpInterceptor {

  constructor() { }

  handleHttpError401(err: HttpErrorResponse) {
    if(err.status === 401) {
      console.log(err.statusText)
    }
    console.log(err);
    return of(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return next.handle(request).pipe(catchError(this.handleHttpError401));
  }
}