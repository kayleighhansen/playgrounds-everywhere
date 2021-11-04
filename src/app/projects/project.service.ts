import { Injectable, EventEmitter } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  maxContactId:number;

  projectAdded = new EventEmitter<Project[]>();
  projectSelectedEvent = new EventEmitter<Project[]>();

  projectChanged = new Subject<Project[]>();
  fetchProjectsEvent = new Subject<Project[]>();

  constructor(private http: HttpClient) { }

  setProjects() {
    this.getProjects().subscribe(res => {
      this.projects = res;
    })
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/projects.json`);
  }

  ngOnInit() {
    this.fetchProjects();
  }

  getProject(id: string): Project {
    return this.projects.find((project) => project.id === id)
  }

  fetchProjects() {
    this.http.get<Project[]>(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/projects.json`)
    .subscribe(projects => {
      console.log(projects);
      this.projects = projects;
      this.fetchProjectsEvent.next(this.projects);
    });
    return;
  }
}
