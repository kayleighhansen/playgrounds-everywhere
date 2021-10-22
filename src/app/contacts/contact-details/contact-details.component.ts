import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactService: ContactService) { }  

  ngOnInit(): void {
    console.log(this.contactService);
  }

  
}
