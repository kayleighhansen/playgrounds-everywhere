import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactEditComponent implements OnInit {
  public contacts: Contact[] = [];
  public contact: Contact;
  id: string; 
  public contactsArray: Contact[] = [];
  fetchContactsSubscription: Subscription;

  error: string;

  constructor(private contactService: ContactService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.LoadDetails();

  }

  LoadDetails() {
    const singleContact = this.contactService.getContacts();

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

}
