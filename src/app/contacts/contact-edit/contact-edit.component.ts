import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { OrganizationService } from '../../organizations/organization.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Organization } from 'src/app/organizations/organization.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class ContactEditComponent implements OnInit, OnDestroy {

  public contacts: Contact[] = [];
  public contact: Contact;
  originalContact: Contact;
  organization: Organization;
  public organizationName: string;
  fetchOrganizationsSubscription: Subscription;
  fetchOrganizationSubscription: Subscription;
  public organizations: Organization[] = [];

  id: string; 
  public contactsArray: Contact[] = [];
  fetchContactsSubscription: Subscription;

  error: string;

  constructor(private contactService: ContactService,
              private organizationService: OrganizationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LoadDetails();
    //
  }

  LoadDetails() {
    this.contactService.fetchContacts();

    this.id = window.location.href.replace("http://localhost:4200/contacts/", "").replace("/edit", "");

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.contact = x ;
        } 
      }
    );
    this.getOrganizationList();
    this.organizationName = this.getOrganizationName();
    }, error => {
      this.error = error.message;
    });
  }

  getOrganizationList() {
    this.organizationService.fetchOrganizations();
    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    this.fetchOrganizationSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {

      this.organizations = result;
      console.log(this.organizations);

      this.organizations.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.name;
        option.id = res.id;

        if (option.value == this.contact.organizationId) {
          console.log(option);
          document.getElementById(option.id);
        };
    
        selectList.appendChild(option);
      }); 
      
    });
  }

  getOrganizationName(): string {
    this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((x) => {
        console.log(this.contact.organizationId);
        if (x.id == this.contact.organizationId) {
          console.log(x.name);
          this.organizationName = x.name;
        }});
      });
    return this.organizationName;
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newContact = new Contact(
      "",
      value.fname,
      value.lname, 
      value.email, 
      value.phone, 
      value.country, 
      value.organizationId, 
      value.job, 
      value.details);

      this.contactService.updateContact(this.originalContact, newContact);

    this.router.navigate(['/contacts']);
  }

  onDelete(id) {
    console.log(id);
    this.contactService.deleteContact(id).subscribe(() => { 
      this.contacts = [id];
      this.router.navigate(['/contacts']);
    });
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
    this.fetchOrganizationSubscription.unsubscribe();
  }
}
