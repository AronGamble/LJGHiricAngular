import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactItem } from 'src/app/Models/contact-item';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private CONTACT_URL = environment.CONTACT_URL;

  constructor(private http: HttpClient) { }

   submitContact(contactItem: ContactItem): Observable<object> {

     return this.http.post(this.CONTACT_URL, contactItem);

 }



}
