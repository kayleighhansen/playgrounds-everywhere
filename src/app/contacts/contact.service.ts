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
    this.getContacts();
  }

  // setContacts() {
  //   this.getContacts().subscribe(res => {
  //     this.contacts = res;
  //   });
  // }

  getContact(id: string) {
    return this.contacts.find((contact) => contact.id === id)
  }

  getContacts() {
    return this.http.get('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json').subscribe((result: any) => {
      // this.contacts = result;

      console.log(result);
        let arr:any = [];
        let keys:any = [];

      for (const [key, value] of Object.entries(result)) {
        arr.push(value);
        keys.push(key);
      }

      for (let i = 0; i < arr.length; i++){
        let c = new Contact(keys[i], arr[i].fname, arr[i].lname, arr[i].email, arr[i].phone, arr[i].country, arr[i].organizationId, arr[i].job, arr[i].details);
        this.contacts.push(c);
      }

      this.contacts.sort((a , b) => 
        a.fname > b.fname ? 1 : b.fname > a.fname ? -1 : 0);
        this.contactListChanged.next(this.contacts.slice());
      },
    );
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`);
  }

  // fetchContacts(): Contact[] {
  //   this.http
  //     .get<Contact[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
  //     .pipe(
  //       map(responseData => {
  //         const postsArray = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key})
  //           }
  //         }
  //         return postsArray;
  //       })
  //     )
  //     .subscribe(contacts => {
  //       this.contacts = contacts;
  //       this.fetchContactsEvent.next(this.contacts);
  //     });

  //   return;
  // }

  // fetchOrganizations() {
  //   this.http
  //     .get<Organization[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json')
  //     .pipe(
  //       map(responseData => {
  //         const postsArray = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key})
  //           }
  //         }
  //         return postsArray;
  //       })
  //     )
  //     .subscribe(organizations => {
  //       this.organizations = organizations;
  //       this.fetchOrganizationsEvent.next(this.organizations);
  //     });

  //   return;
  // }

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
