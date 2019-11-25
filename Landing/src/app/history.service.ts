import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmploymentItem } from './Models/employment-item';



@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) {

  }

  getHistory(): Observable<EmploymentItem[]> {

    return this.http.get<EmploymentItem[]>('https://ljghistoryservice.azurewebsites.net/History').pipe(
      map(res => {
        return res.map(item => {
          return new EmploymentItem(
            item.id,
            item.companyName,
            item.location,
            item.description,
            item.startDate,
            item.endDate,
            item.typeOfEmployment
          );
        });
      })
    );

  }

  getEmploymentItem(id: string): Observable<EmploymentItem> {

    return this.http.get<EmploymentItem>('https://ljghistoryservice.azurewebsites.net/History/' + id).pipe(
      map(res => {
        return new EmploymentItem(
          res.id,
          res.companyName,
          res.location,
          res.description,
          res.startDate,
          res.endDate,
          res.typeOfEmployment,
        );
      })
    );

  }


}


