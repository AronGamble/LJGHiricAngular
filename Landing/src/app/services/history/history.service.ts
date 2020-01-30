import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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

    return this.http.get<EmploymentItem[]>(this.API_URL + 'History').pipe(
      map(res => {
        return res.map(item => {
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
      })
    );
  }

  getEmploymentItem(id: string): Observable<EmploymentItem> {

    return this.http.get<EmploymentItem>(this.API_URL + 'History/' + id).pipe(
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
      })
    );

  }
}
