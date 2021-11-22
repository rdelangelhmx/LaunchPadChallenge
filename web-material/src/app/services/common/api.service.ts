/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = `${environment.apiUrl}`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    //Authorization: `Bearer ${localStorage.getItem('TokenJwt')}`, if add security token
  });
  constructor(private httpClient: HttpClient) { }
  // Get Records async
  async getData(action: string, httpParams: HttpParams): Promise<Response> {
    const result = await this.httpClient
      .get(`${this.ApiUrl}/${action}`, { headers: this.httpHeaders, params: httpParams })
      .pipe(
        retry(1),
        delay(3000),
        catchError(this.handleError)
      ).toPromise();
    return result as Response;
  }
  // Get Records
  getRecords<T>(action: string, httpParams: HttpParams): Observable<T> {
    return this.httpClient
      .get<T>(`${this.ApiUrl}/${action}`, { headers: this.httpHeaders, params: httpParams })
      .pipe(
        retry(1),
        delay(3000),
        catchError(this.handleError)
      );
  }
  // Handle Error in Service
  handleError(error: { error: { message: any; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `SysErr: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `SysError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(`SysError: ${error}`);
    return throwError(errorMessage);
    //return empty();
  }
}
