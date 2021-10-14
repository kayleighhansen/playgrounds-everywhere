import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [
    new Contact(1, 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
    new Contact(2, 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
    new Contact(3, 'Michelle', 'Obama', 'example@email.com', '123-456-7890', 'asset.png', 'USA', 'First Lady', 'Took away our mozzerella sticks'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onContactSelected(contact: Contact) { 
    this.contactWasSelected.emit(contact);
  }
}
