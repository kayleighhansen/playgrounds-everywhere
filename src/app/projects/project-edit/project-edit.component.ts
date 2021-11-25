import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/contacts/contact.model';
import { ContactService } from '../../contacts/contact.service';
import { Organization } from 'src/app/organizations/organization.model';
import { OrganizationService } from '../../organizations/organization.service';
import { NgForm } from '@angular/forms';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;
  contact: Contact;
  project: Project;
  organization: Organization;
  contacts: Contact[] = [];
  organizations: Organization[] = [];
  
  constructor(private projectService: ProjectService,
              private organizationService: OrganizationService,
              private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProject = new Project(
      "0", 
      value.name, 
      value.organizationId, 
      value.contactId, 
      value.date, 
      value.country, 
      value.city, 
      value.equipment, 
      value.equipmentAmount,
      value.donation, 
      value.donationsAmount,
      value.price, 
      value.details,
      value.results
    );

    console.log(newProject);
    this.projectService.addProject(newProject);

    //this.router.navigate(['/projects']);
  }


}
