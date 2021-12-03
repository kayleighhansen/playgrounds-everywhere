import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../contact.model';
import { ProjectService } from 'src/app/projects/project.service';
import { Project } from 'src/app/projects/project.model';

@Component({
  selector: 'app-projects-assisted',
  templateUrl: './projects-assisted.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ProjectsAssistedComponent implements OnInit {

  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");

  constructor() { }

  ngOnInit(): void {
    this.getProjects(this.contactId);
  }

  getProjects(id: string) {
    // fetch projects

    // for each that matches the right id put in array

    // return the array of relevant projects
  }
}
