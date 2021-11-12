import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  
  public contacts: Contact[] = [];
  fetchContactsSubscription: Subscription;

  error: string;
  isFetching: boolean = false;
  isEmpty: boolean = false;

  constructor(private contactService: ContactService) { }
 
  ngOnInit(): void {
    const list = this.contactService.fetchContacts();

    this.isFetching = true;

    this.onFetchingContacts();

    if (this.contacts.length == 0) {
      this.isEmpty = true;
      this.isFetching = false;
    }
  }

  onFetchingContacts() {
    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result)=> {
      this.isFetching = false;
      this.contacts = result;
      console.log(this.contacts);
    }, error => {
      this.error = error.message;
    });
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
  }

}
