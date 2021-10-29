import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-organization-item',
  templateUrl: './organization-item.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationItemComponent implements OnInit {
  @Input() organization: Organization;

  constructor(private organizationService: OrganizationService) { }

  ngOnInit(): void {
  }

  // onSelected() {
  //   this.organizationService.organizationSelectedEvent.emit(this.organization);
  // }

}
