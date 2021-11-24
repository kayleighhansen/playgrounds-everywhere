import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';
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
  public organization: Organization;
  id: string; 
  public organizationsArray: Organization[] = [];
  fetchOrganizationsSubscription: Subscription;

  httpUrl = ""
  error: string;

  constructor(private organizationService: OrganizationService,
              private router: Router, 
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
 
    this.LoadDetails();

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

  getContactName() {
    
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
  }
}
