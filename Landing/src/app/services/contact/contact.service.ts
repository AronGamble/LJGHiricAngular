import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactItem } from 'src/app/Models/contact-item';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  submitContact(contactItem: ContactItem): Observable<object> {

      return this.http.post('https://ljghistoryservice.azurewebsites.net/contact', contactItem);

  }



}
