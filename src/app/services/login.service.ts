import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  createUser(loginData: any): Observable<any> {
    return this.http.post('http://localhost:3000/login', loginData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          error.error.message ||
            'Something bad happened; please try again later.'
        );
      })
    );
  }
}
