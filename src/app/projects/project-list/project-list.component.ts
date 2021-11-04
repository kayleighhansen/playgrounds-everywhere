import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../project.model';
import { Subscription } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectListComponent implements OnInit {
  @Output() projectWasSelected = new EventEmitter<Project>();

  public projects: Project[] = []; 
  fetchProjectsSubscription: Subscription;
  
  constructor(private projectService: ProjectService) { }

  OnFetchProjects() {
    this.projectService.getProjects();
  }

  ngOnInit(): void {
    const list = this.projectService.fetchProjects();

    this.fetchProjectsSubscription = this.projectService.fetchProjectsEvent.subscribe((result => {
      this.projects = result;
      console.log(this.projects);
    }))
  }

  ngOnDestroy():void {
    this.fetchProjectsSubscription.unsubscribe();
  }

}
