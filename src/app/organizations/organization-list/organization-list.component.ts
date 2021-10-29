import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Organization } from '../organization.model';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../organization.service';


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationListComponent implements OnInit {
  @Output() organizationWasSelected = new EventEmitter<Organization>();

  public organizations: Organization[];
  fetchOrganizationsSubscription: Subscription;

  constructor(private organizationService: OrganizationService) { }

  OnFetchOrganizations() {
    this.organizationService.getOrganizations();
  }

  ngOnInit(): void {
    const list = this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result => {
      this.organizations = result;
      console.log(this.organizations);
    }))
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
  }

}
