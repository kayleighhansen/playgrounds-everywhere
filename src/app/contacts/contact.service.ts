import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];

  contact: Contact[];

  fetchContactsEvent = new Subject<Contact[]>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchContacts();
  }

  setContacts() {
    this.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  getContact(id: string): Contact[] {
    this.getContacts().subscribe(res => {
      console.log(res);
      this.contact = res;
    });

    return this.contacts;
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

  deleteContact(id : string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/` + id + `.json`);
  }
}
