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
  httpUrl = "";
  error: string;

  public projectsArray: Project[] = [];

  public organizationName: string;
  public contactName: string;

  fetchProjectsSubscription: Subscription;
  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;

  constructor(private projectService: ProjectService,
              private organizationService: OrganizationService,
              private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {

    this.LoadDetails();
    this.organizationName = this.getOrganizationName();
    //this.contactName = this.getContactName();

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
    }, error => {
      this.error = error.message;
    });
  }

  getOrganizationName(): string {
    this.contactService.fetchContacts();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((x) => {
        console.log(this.project.organizationId);
        if (x.id == this.project.organizationId) {
          console.log(x.name);
          this.organizationName = x.name;
        }});
      });
      console.log(this.organizationName);
    return this.organizationName;
  }

  getContactName(): string {
    this.contactService.fetchContacts();

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        console.log(this.project.organizationId);
        if (x.id == this.project.organizationId) {
          this.contactName = x.fname + " " + x.lname;
        }});
      });
    return this.contactName;
  }

  onDelete(id) {

  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
    this.fetchOrganizationsSubscription.unsubscribe();
  }
}
