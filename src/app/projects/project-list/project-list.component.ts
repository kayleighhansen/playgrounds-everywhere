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

  public projects: Project[] = []; 
  public contact: Project;

  fetchProjectsSubscription: Subscription;

  error: string;
  isFetching: boolean = false;
  isEmpty: boolean = false;

  term: string;
  
  constructor(private projectService: ProjectService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //this.searchBox.nativeElement.value = null;
      this.LoadProjects();
    }, 200);
  }

  ngOnInit(): void {
  }

  LoadProjects() {
    const list = this.projectService.fetchProjects();

    this.isFetching = true;

    this.fetchProjectsSubscription = this.projectService.fetchProjectsEvent.subscribe((result)=> {
      this.isFetching = false;

      this.projects = result;

      if(this.projects.length < 1) {
        this.isEmpty= true;
      }

    }, error => {
      this.error = error.message;
    });
  }

  search(value: string) {
    this.term = value;
  }

  ngOnDestroy():void {
    this.fetchProjectsSubscription.unsubscribe();
  }

}
