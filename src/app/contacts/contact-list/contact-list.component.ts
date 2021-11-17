import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { OrganizationService } from '../../organizations/organization.service';
import { Organization } from 'src/app/organizations/organization.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  
  public contacts: Contact[] = [];
  public contact: Contact;
  
  fetchContactsSubscription: Subscription;

  organizationName: string;
  organization: Organization;

  error: string;
  isFetching: boolean = false;
  isEmpty: boolean = false;

  term: string;

  constructor(private contactService: ContactService, private organizationService: OrganizationService) { }
 
  ngOnInit(): void {

    this.LoadContacts();

    this.getOrganization(this.contact.organizationId);
  }

  getOrganization(id: string) {
    this.organizationService.getOrganization(id);

    //this.organizationName = this.organization.name;
    return this.organizationName = this.organization.name;;
  }

  LoadContacts() {
    const list = this.contactService.fetchContacts();

    this.isFetching = true;

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result)=> {
      this.isFetching = false;

      this.contacts = result;

      if(this.contacts.length < 1) {
        this.isEmpty= true;
      }

    }, error => {
      this.error = error.message;
    });
  }

  search(value: string) {
    this.term = value;
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
  }

}
