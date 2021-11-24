import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Organization } from '../../organizations/organization.model';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { OrganizationService } from '../../organizations/organization.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['../../app.component.css']
})

export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;

 
  constructor() { }

  ngOnInit(): void {  }   

}
