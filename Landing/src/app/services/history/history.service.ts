import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EmploymentItem } from '../../Models/employment-item';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {

  }

  getHistory(): Observable<EmploymentItem[]> {

    return this.http.get<EmploymentItem[]>(this.API_URL + 'contracts', { observe: 'response' }).pipe(
      map(res => {
        return res.body.map(item => {
          return new EmploymentItem(
            item.id,
            item.companyName,
            item.location,
            item.description,
            item.startDate,
            item.endDate,
            item.typeOfEmployment,
            item.detail
          );
        });
      }),
      catchError(this.handleError)
    );
  }

  getEmploymentItem(id: string): Observable<EmploymentItem> {

    return this.http.get<EmploymentItem>(this.API_URL + 'contracts/' + id).pipe(
      map(res => {
        return new EmploymentItem(
          res.id,
          res.companyName,
          res.location,
          res.description,
          res.startDate,
          res.endDate,
          res.typeOfEmployment,
          res.detail
        );
      }),
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
