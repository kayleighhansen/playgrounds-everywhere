import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();
  
  public contacts: Contact[];
  constructor(private contactService: ContactService) { }

  OnFetchContacts() {
    this.contactService.getContacts();
  }
 
  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts=>{
      console.log(contacts);
    });
  }
}
