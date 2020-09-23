import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptorService implements HttpInterceptor {

  constructor() { }

  handler401HttpError(error: HttpErrorResponse, caught) {
    console.log(`Error status: ${error.status}`);
    // return error;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
    // .pipe(
    //   catchError(this.handler401HttpError)
    // )
  }
}
