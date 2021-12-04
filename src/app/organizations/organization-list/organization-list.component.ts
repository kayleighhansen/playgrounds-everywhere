import { Component, OnInit, EventEmitter, OnDestroy, Output, ElementRef, ViewChild } from '@angular/core';
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

  term: string;
  error: string;
  isFetching: boolean = false;
  isEmpty: boolean = false; 

  @ViewChild('searchBox', {static: false}) searchBox: ElementRef;

  constructor(private organizationService: OrganizationService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchBox.nativeElement.value = null;
      this.LoadContacts();
    }, 200);
  }

  ngOnInit(): void { }



  LoadContacts(){
    this.organizationService.fetchOrganizations();

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

  search(value: string) {
    this.term = value;
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
  }

}
