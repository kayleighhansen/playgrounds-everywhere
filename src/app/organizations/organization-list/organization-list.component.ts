import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Organization } from '../organization.model';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationListComponent implements OnInit, OnDestroy {

  public organizations: Organization[] = [];
  public organizationsArray: Organization[] = [];
  fetchOrganizationsSubscription: Subscription;

  error: string;
  isFetching: boolean = false;
  isEmpty: boolean = false;

  constructor(private organizationService: OrganizationService) { }

  ngOnInit(): void {
    const list = this.organizationService.fetchOrganizations();

    this.isFetching = true;

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      this.isFetching = false;

      this.organizations = result;
      console.log(this.organizations);

      if(this.organizations.length < 1) {
        this.isEmpty= true;
      }

    }, error => {
      this.error = error.message;
    });
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
  }

}
