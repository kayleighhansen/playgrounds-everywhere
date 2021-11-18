import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactDetailsComponent implements OnInit {
  public contacts: Contact[] = [];
  public contact: Contact;

  public singleContact: string;

  id: string; 
  public contactsArray: Contact[] = [];
  fetchContactsSubscription: Subscription;

  httpUrl = ""
  error: string;

  constructor(private contactService: ContactService,
              private router: Router, 
              private route: ActivatedRoute,
              private http: HttpClient) { }  

  ngOnInit(): void {
    this.LoadDetails();
  }  

  LoadDetails() {
    const singleContact = this.contactService.getContacts();

    this.id = window.location.href.replace("http://localhost:4200/contacts/", "");

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



  onDelete(id) {
    console.log(id);
    this.contactService.deleteContact(id).subscribe(() => { 
      this.contacts = [id];
      this.router.navigate(['/contacts']);
    });
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
  }
}
