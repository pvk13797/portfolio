import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://localhost:5200';
  private contacts$: Subject<Contact[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<string> {
    return this.httpClient.post(`${this.url}/contact`, contact, { responseType: 'text' });
  }
}
