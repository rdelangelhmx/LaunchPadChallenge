/* tslint:disable:no-unused-variable */
/**
 * @file Contacts Service
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 20/Nov/21
 * ----------------------------------
*/
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contacts } from 'src/app/models/contacts';
import { Response } from 'src/app/models/response';
import { ApiService } from 'src/app/services/common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  response: Response = new Response();
  params: HttpParams = new HttpParams();
  constructor(
    private apiService: ApiService
  ) { }

  GetAll(filtro: Contacts) {
    this.response = new Response();
    this.params = new HttpParams({ fromObject: JSON.parse(JSON.stringify(filtro)) });
    return this.apiService.getRecords<Response>(`GetContactsAll`, this.params)
      .pipe(map(response => {
        if (response != null) {
          return response as unknown as Response;
        }
        this.response.success = false;
        this.response.mesagge = 'No records found, try again changing the filter';
        return this.response;
      }),catchError(error => {
        console.log('Error GetContactsAll',error);
        return throwError(error);
      }));
  }
}
