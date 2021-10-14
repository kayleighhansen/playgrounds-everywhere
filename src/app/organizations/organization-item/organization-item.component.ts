import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization.model';

@Component({
  selector: 'app-organization-item',
  templateUrl: './organization-item.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationItemComponent implements OnInit {
  @Input() organization: Organization;

  constructor() { }

  ngOnInit(): void {
  }

}
