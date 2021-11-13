import { Injectable, EventEmitter } from '@angular/core';
import { Organization } from './organization.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {
  private organizations: Organization[] = [];

  organization: Organization[];
  
  fetchOrganizationsEvent = new Subject<Organization[]>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchOrganizations();
  }

  setOrganizations() {
    this.getOrganizations().subscribe(res => {
      this.organizations = res;
    });
  }

  getOrganization(id: string): Organization[] {
    this.getOrganizations().subscribe(res => {
      console.log(res);
      this.organization = res;
    });

    return this.organizations;  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json`);
  }

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
      });

    return;
  }

  addOrganization(newOrganization: Organization) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations.json`, newOrganization)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  deleteOrganization(id : string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/organizations/` + id + `.json`);
  }
}
