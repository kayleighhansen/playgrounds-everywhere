import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrganizationService } from '../../organizations/organization.service';
import { Organization } from 'src/app/organizations/organization.model';
import { ContactService } from '../../contacts/contact.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  public projects: Project[] = [];
  public project: Project;

  public singleProject: string;

  id: string;
  error: string;
  httpUrl = "";
  
  public projectsArray: Project[] = [];

  public organizationName: string;
  public contactName: string;

  fetchProjectsSubscription: Subscription;
  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;

  constructor(private projectService: ProjectService,
              private organizationService: OrganizationService,
              private contactService: ContactService) { }

  ngOnInit(): void {

    this.LoadDetails();

  }

  LoadDetails() {
    this.projectService.fetchProjects();

    this.id = window.location.href.replace("http://localhost:4200/projects/", "");

    this.fetchProjectsSubscription = this.projectService.fetchProjectsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.project = x ;
        }}
      );
      this.organizationName = this.getOrganizationName();
      this.contactName = this.getContactName();
    }, error => {
      this.error = error.message;
    });
  }

  getOrganizationName(): string {
    this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.project.organizationId) {
          this.organizationName = x.name;
        }});
      });
    return this.organizationName;
  }

  getContactName(): string {
    this.contactService.fetchContacts();

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.project.contactId) {
          this.contactName = x.fname + " " + x.lname;
        }});
      });
    return this.contactName;
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
    this.fetchOrganizationsSubscription.unsubscribe();
  }
}
