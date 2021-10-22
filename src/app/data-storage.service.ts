import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contacts/contact.service';

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
}
