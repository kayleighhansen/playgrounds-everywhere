import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  fetchContactsEvent = new Subject<Contact[]>();
  
  maxContactId: number;

  constructor(private http: HttpClient) { }

  setContacts() {
    this.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  ngOnInit() {
    this.fetchContacts();
  }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.contactId === id)
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
  }

  fetchContacts() {
    this.http
      .get<Contact[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key})
            }
          }
          return postsArray;
        })
      )
      .subscribe(contacts => {
        this.contacts = contacts;
        this.fetchContactsEvent.next(this.contacts);
      });

    return;
  }

  addContact(newContact: Contact) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`, newContact)
      .subscribe(responseData => {
        console.log(responseData);
        
      });
  }

  editContact() {
    console.log("edit");
  }

  deleteContact() {
    console.log("delete");
  }
}
