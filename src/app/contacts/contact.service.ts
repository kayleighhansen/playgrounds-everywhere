import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];
  maxContactId:number;
    
  fetchContactsEvent = new Subject<Contact[]>();
  contactAdded = new EventEmitter<Contact[]>();

  contactSelectedEvent = new EventEmitter<Contact>();
  contactsChanged = new Subject<Contact[]>();


  constructor(private http: HttpClient) { 
    
  }

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

  fetchContacts(){
    this.http
      .get<Contact[]>
      ('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
      // .pipe(
      //   map(contacts => {
      //     return contacts.map(contact => {
      //       console.log(contact);
      //       this.contacts = contacts;
      //       this.fetchContactsEvent.next(contacts);
      //     });
      //   })
      // )
      .subscribe(contacts => {
        console.log(contacts);
        this.contacts = contacts;
        this.fetchContactsEvent.next(this.contacts);
        // this.setContacts();

        // console.log(this.contacts);
        // this.fetchContactsEvent.next(this.contacts);
      });

    return;
  }
}
