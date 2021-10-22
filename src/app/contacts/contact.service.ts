import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    new Contact('1', 'Kayleigh', 'Hansen', 'kayleigh@hansens.org', '5713618641', '', 'USA', 'Hansen Web Consulting' ,'Web Developer', 'Rogers graddaughter'),
  ]; 

  contactAdded = new EventEmitter<Contact[]>();

  contactSelectedEvent = new EventEmitter<Contact>();
 
  getContacts(): Contact[] {
      return this.contacts.slice();
    }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id)
  } 

  addContact(contact: Contact) {
    console.log(contact);
  }

  constructor() { }
}
