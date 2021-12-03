import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../contact.model';
import { ProjectService } from 'src/app/projects/project.service';
import { Project } from 'src/app/projects/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-assisted',
  templateUrl: './projects-assisted.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ProjectsAssistedComponent implements OnInit {

  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");
  contact: Contact[];
  contacts: Contact[] = [];

  project: Project[];
  projects: Project[] = [];
  
  projectsAssisted: Project[] = [];

  private projectChangeSub: Subscription;

  isEmpty: boolean;
  error: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectsAssisted = this.fetchProjects();
  }

  fetchProjects(): Project[] {
    this.projectService.fetchProjects();

    this.projectChangeSub = this.projectService.projectListChanged.subscribe(
      (projects: Project[]) => {
        this.projects = projects;

        this.projects.forEach((result) => {
          if(result.contactId == this.contactId) {
            this.projectsAssisted.push(result);
          }
          console.log(this.projectsAssisted);
        });

        console.log(this.projectsAssisted);

        if(this.projectsAssisted.length < 1) {
          this.isEmpty= true;
        }
    }, error => {
      this.error = error.message;
    });
    return this.projectsAssisted;
  }

  ngOnDestroy(): void {
    this.projectChangeSub.unsubscribe();
  }
}
