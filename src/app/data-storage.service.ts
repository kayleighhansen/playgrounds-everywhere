import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contacts/contact.service';
import { Contact } from './contacts/contact.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private contactService: ContactService) { }

  saveData() {
    const contacts = this.contactService.getContacts();
    return this.http.put('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json', contacts)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchContacts() {
    const contacts = this.http.get<Contact[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
    .subscribe(contacts => {
      this.contactService.setContacts();
    });
  }
}
