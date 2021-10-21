import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    new Contact('1', 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
    new Contact('2', 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
    new Contact('3', 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
  ]; 

  contactAdded = new EventEmitter<Contact[]>();

  getContacts(): Contact[] {
      return this.contacts.slice();
    }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id)
  } 

  addContact(contact: Contact) {
    console.log(contact);
  }

  // addMessage(message : Message) {
  //   console.log(message);
  //   this.messages.push(message);
  //   this.messagesAdded.emit(this.messages.slice());
  // }

  constructor() { }
}
