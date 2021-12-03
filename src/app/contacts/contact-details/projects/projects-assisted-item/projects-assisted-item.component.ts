import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/projects/project.model';

@Component({
  selector: 'app-projects-assisted-item',
  templateUrl: './projects-assisted-item.component.html',
  styleUrls: ['./projects-assisted-item.component.css']
})
export class ProjectsAssistedItemComponent implements OnInit {

  @Input() project: Project;
  public projects: Project[] = [];

  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");
  isEmpty: boolean;

  constructor() { }

  ngOnInit(): void { }

}
