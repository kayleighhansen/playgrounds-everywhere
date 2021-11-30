import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Organization } from '../organizations/organization.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  // object arrays to store records
  private contacts: Contact[] = [];
  private notes: Note[] = [];

  // models 
  contact: Contact[];
  organization: Organization[];

  // subjects
  fetchContactsEvent = new Subject<Contact[]>();
  fetchOrganizationsEvent = new Subject<Organization[]>();
  fetchNotesEvent = new Subject<Note[]>();
  fetchOrganizationEvent = new Subject<Organization[]>();
  contactListChanged = new Subject<Contact[]>();
  noteListChanged = new Subject<Note[]>();

  // dependency injections
  constructor(private http: HttpClient) { }

  // on init methods
  ngOnInit() { }

  // get single records
  getContact(id: string) {
    return this.contacts.find((contact) => contact.id === id)
  }

  // get all records
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
      });

    return;
  }

  // add new record
  addContact(newContact: Contact) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json`, newContact)
      .subscribe(responseData => {
        console.log(responseData);
        
      });
  }

  // edit one record
  updateContact(originalContact: Contact, newContact: Contact) {

    if(originalContact == null || newContact == null){
      return;
    }
    
    const pos = this.contacts.indexOf(originalContact);

    if(pos < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;

    console.log(newContact);

    this.http.put(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/` + newContact.id + `.json`, newContact)
      .subscribe(responseData => {
        console.log(responseData);
        
      });
  }

  // delete one record
  deleteContact(id : string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/` + id + `.json`);
  }

  addNote(newNote: Note) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/`+ newNote.contactId + `/notes.json`, newNote)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchNotes(contactId) {
    this.http
      .get<Note[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/' + contactId + '/notes.json')
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
      .subscribe(notes => {
        this.notes = notes;
        this.fetchNotesEvent.next(this.notes);

        this.notes.sort((a , b) => 
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0);
        this.noteListChanged.next(this.notes.slice());
      });

    return;
  }

}
