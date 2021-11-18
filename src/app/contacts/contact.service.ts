import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Contact } from './contact.model';
import { Organization } from '../organizations/organization.model'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: Contact[] = [];
  private organizations: Organization[] = []

  contact: Contact[];
  organization: Organization[];

  fetchContactsEvent = new Subject<Contact[]>();
  fetchOrganizationsEvent = new Subject<Organization[]>();
  contactListChanged = new Subject<Contact[]>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchContacts();
  }


  getContact(id: string) {
    return this.contacts.find((contact) => contact.id === id)
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
  }

  fetchContacts(): Contact[] {
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

        this.contacts.sort((a , b) => 
        a.fname > b.fname ? 1 : b.fname > a.fname ? -1 : 0);
        this.contactListChanged.next(this.contacts.slice());

        console.log(this.contacts);
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
