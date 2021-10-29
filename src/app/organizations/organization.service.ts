import { Injectable, EventEmitter } from '@angular/core';
import { Organization } from './organization.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {
  private organizations: Organization[] = [];

  organizationAdded = new EventEmitter<Organization[]>();
  organizationSelectedEvent = new EventEmitter<Organization[]>();
  organizationChanged = new Subject<Organization[]>();
  fetchOrganizationsEvent = new Subject<Organization[]>();

  constructor(private http: HttpClient) { }

  setContacts() {
    this.getOrganizations().subscribe(res => {
      this.organizations = res;
    })
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json`);
  }

  ngOnInit() {
    this.fetchOrganizations();
  }

  getOrganization(id: string): Organization {
    return this.organizations.find((organization) => organization.id === id)
  }

  addOrganization(organization: Organization) {
    console.log(organization);
  }

  fetchOrganizations() {
    this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json`)
    .subscribe(organizations => {
      console.log(organizations);
      this.organizations = organizations;
      this.fetchOrganizationsEvent.next(this.organizations);
    })
  }
}
