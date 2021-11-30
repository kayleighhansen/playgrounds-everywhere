import { Injectable, EventEmitter } from '@angular/core';
import { Organization } from './organization.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  // object arrays 
  private organizations: Organization[] = [];

  // models 
  organization: Organization[];

  // subjects  
  fetchOrganizationsEvent = new Subject<Organization[]>();
  fetchOrganizationEvent = new Subject<Organization[]>();
  organizationListChanged = new Subject<Organization[]>();

  // dependency injection
  constructor(private http: HttpClient) { }

  // on init methods
  ngOnInit() { }

  // get single record
  getOrganization(id: string) {
    return this.organization.find((organization) => organization.id === id)  
  }

  // get all records 
  fetchOrganizations() {
    this.http
      .get<Organization[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key})
            }
          }
          return postsArray;
        })
      )
      .subscribe(organizations => {
        this.organizations = organizations;
        this.fetchOrganizationsEvent.next(this.organizations);
        this.fetchOrganizationEvent.next(this.organizations);

        this.organizations.sort((a , b) => 
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.organizationListChanged.next(this.organizations.slice());

        console.log(this.organizations);
      });

    return;
  }

  // add new record
  addOrganization(newOrganization: Organization) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json`, newOrganization)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  // edit single record
  editContact() {

  }

  // delete single record
  deleteOrganization(id : string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations/` + id + `.json`);
  }
}
