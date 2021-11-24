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
  fetchOrganizationsSubscription: Subscription;
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

    const list = this.organizationService.fetchOrganizations();
    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {

      this.organizations = result;
      console.log(this.organizations);

      if(this.organizations.length < 1) {
      }

      this.organizations.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.name;
    
        selectList.appendChild(option);
      }); 
      
    });

    this.originalContact = this.contactService.getContact(this.id);
  }

  LoadDetails() {
    const singleContact = this.contactService.fetchContacts();

    this.id = window.location.href.replace("http://localhost:4200/contacts/", "").replace("/edit", "");

    console.log(this.id);

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.contact = x ;
        } 
      }
    );
      console.log(this.contact);
    }, error => {
      this.error = error.message;
    });
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

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
  }
}
