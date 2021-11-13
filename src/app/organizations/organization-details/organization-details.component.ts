import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationDetailsComponent implements OnInit {
  @Input() organization: Organization;
  id: string;

  constructor(private organizationService: OrganizationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = params['organization.id'];
      //this.organization = this.organizationService.getOrganization(this.id);
    });  
  }

}
