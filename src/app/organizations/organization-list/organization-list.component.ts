import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization.model';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationListComponent implements OnInit {
  organizations: Organization[] = [
    new Organization(1, 'The US Government', 'USA', 'Washington D.C.', 'email@email.com', '123-456-7890', 'Michelle Obama', '07-05-1998', 'Local Government', 'imgurl.jpeg', 'just the greatest'),
    new Organization(2, 'The US Government', 'USA', 'Washington D.C.', 'email@email.com', '123-456-7890', 'Michelle Obama', '07-05-1998', 'Local Government', 'imgurl.jpeg', 'just the greatest'),
    new Organization(3, 'The US Government', 'USA', 'Washington D.C.', 'email@email.com', '123-456-7890', 'Michelle Obama', '07-05-1998', 'Local Government', 'imgurl.jpeg', 'just the greatest'),
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
