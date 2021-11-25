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
  styleUrls: ['../../app.component.css']
})
export class ProjectEditComponent implements OnInit {

  public project: Project;

  constructor(private contactServices: ContactService, 
              private organizationServices: OrganizationService, 
              private projectServices: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  LoadDetails() {
    console.log("Load Details");
  }

  onSubmit(form: NgForm){
    console.log("submit");
  }

}
