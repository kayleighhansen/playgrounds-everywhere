import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { OrganizationService } from '../../organizations/organization.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Organization } from 'src/app/organizations/organization.model';
import { NgForm } from '@angular/forms';
import { Note } from './notes/note.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactDetailsComponent implements OnInit {
  public contacts: Contact[] = [];
  public contactsArray: Contact[] = [];

  public contact: Contact;
  public note: Note;
  organization: Organization;
  
  public singleContact: string;
  organizationName: string;
  id: string; 
  error: string;
  organizations: void;
  httpUrl = ""
  
  fetchContactsSubscription: Subscription;
  fetchNotesSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;

  constructor(private contactService: ContactService,
              private organizationService: OrganizationService) { }  

  ngOnInit(): void {
    
    this.LoadDetails();
  }  

  LoadDetails() {
    this.contactService.fetchContacts();

    this.id = window.location.href.replace("http://localhost:4200/contacts/", "");

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.contact = x ;
        } 
      }
    );
    this.organizationName = this.getOrganizationName();
    }, error => {
      this.error = error.message;
    });
  }

  getOrganizationName(): string {
    this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.contact.organizationId) {
          this.organizationName = x.name;
        }});
      });
    return this.organizationName;
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
    this.fetchOrganizationsSubscription.unsubscribe();
  }
}
