import { Injectable } from '@angular/core';
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

    return;
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
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

  fetchOrganizations() {
    this.http
      .get<Organization[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json')
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
      .subscribe(organizations => {
        this.organizations = organizations;
        this.fetchOrganizationsEvent.next(this.organizations);
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
