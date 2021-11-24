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

  organizationName: string;
  organization: Organization;
 
  constructor(private contactService: ContactService, 
              private organizationService: OrganizationService) { }

  ngOnInit(): void {

    // this.getOrganizationName(this.contact.organizationId);
    // console.log(this.contact.organizationId);

    // get organization name - subscription 

  }   

  getOrganizationName(id: string) {

    console.log(id);


    this.organizationService.getOrganization(id);
    console.log(this.organization);

    return this.organizationName;
  }

}
