import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contacts/contact.service';
import { Contact } from './contacts/contact.model';
import { map } from 'rxjs/operators';

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
    this.http
      .get<Contact[]>
      ('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts.json')
      .pipe(
        map(contacts => {
          return contacts.map(contact => {
            return { contact: [] };
          });
        })
      )
      .subscribe(contacts => {
        this.contactService.setContacts();
        console.log(this.contactService.setContacts());
      });
  }
}
