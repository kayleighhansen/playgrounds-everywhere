import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';
import { ContactService } from '../../contacts/contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  public organizations: Organization[] = [];
  public organizationsArray: Organization[] = [];
  public organization: Organization;

  fetchOrganizationsSubscription: Subscription;
  fetchContactsSubscription: Subscription;

  httpUrl = "";
  error: string;
  id: string; 

  contactName: string;

  constructor(private organizationService: OrganizationService,
              private router: Router, 
              private route: ActivatedRoute,
              private contactService: ContactService) { }

  ngOnInit(): void {
 
    this.LoadDetails();

    this.contactName = this.getContactName();

  }

  LoadDetails() {
    const singleOrganization = this.organizationService.fetchOrganizations();

    this.id = this.route.url.toString().replace('http://localhost:4200/organizations/', '');

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result)=> {
      if(this.id = result[0].id) {
        this.organization = result[0];
      }
        console.log(this.organization);

    }, error => {
      this.error = error.message;
    });
  }

  getContactName(): string {
    this.contactService.fetchContacts();

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.organization.contactId) {
          console.log(x.fname);
          this.contactName = x.fname + " " + x.lname;
        }});
      });
    return this.contactName;
  }

  onDelete(id) {
    console.log(id);
    this.organizationService.deleteOrganization(id).subscribe(() => { 
      this.organizations = [id];
      this.router.navigate(['/organizations']);
    });
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
    this.fetchContactsSubscription.unsubscribe();
  }
}
