import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactDetailsComponent implements OnInit {
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

    const singleContact = this.contactService.fetchContacts();

    console.log(singleContact);


    this.id = this.route.url.toString().replace('http://localhost:4200/contacts/', '');

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result)=> {
      if(this.id = result[0].id) {
        this.contact = result[0];
      }
        console.log(this.contact);

    }, error => {
      this.error = error.message;
    });
 
  }  

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
  }

  onDelete() {
  }
}
