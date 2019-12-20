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

    //this.http.post('https://ljghistoryservice.azurewebsites.net/Contact', contactItem).pipe(

      return this.http.post('https://localhost:44348/contact', contactItem);

  }



}
