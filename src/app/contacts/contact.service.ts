import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];
    
  contactAdded = new EventEmitter<Contact[]>();
  contactSelectedEvent = new EventEmitter<Contact>();
  contactsChanged = new Subject<Contact[]>();

  constructor(private http: HttpClient) { }

  setContacts() {
    this.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
  }

  ngOnInit() {
    this.fetchContacts();
  }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id)
  } 

  addContact(contact: Contact) {
    console.log(contact);
  }

  fetchContacts(): Observable<Contact[]> {
    this.http
      .get<Contact[]>
      ('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
      .pipe(
        map(contacts => {
          return contacts.map(contact => {
            console.log(contact);
          });
        })
      )
      .subscribe(contacts => {
        this.setContacts();
        console.log(this.contacts);
      });

    return;
  }
}
