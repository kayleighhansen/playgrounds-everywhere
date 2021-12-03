import { Injectable, EventEmitter } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // model
  private projects: Project[] = [];

  // subject
  projectListChanged = new Subject<Project[]>();
  fetchProjectsEvent = new Subject<Project[]>();

  // dependency injections
  constructor(private http: HttpClient) { }

  ngOnInit() { }


  // get single record
  getProject(id: string): Project {
    return this.projects.find((project) => project.id === id)
  }

  // get all records
  fetchProjects(): Project[] {
    this.http
      .get<Project[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/projects.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key})
            }
          }
          return postsArray;
        })
      )
      .subscribe(projects => {
        this.projects = projects;
        this.fetchProjectsEvent.next(this.projects);

        this.projects.sort((a , b) => 
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.projectListChanged.next(this.projects.slice());

      });

    return;
  }

  // add new project
  addProject(newProject: Project) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/projects.json`, newProject)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

    // edit one record
  updateProject(originalProject: Project, newProject: Project) {

    if(originalProject == null || newProject == null){
      return;
    }
    
    const pos = this.projects.indexOf(originalProject);

    if(pos < 0) {
      return;
    }
    newProject.id = originalProject.id;
    this.projects[pos] = newProject;

    //this.storeProject();
  }

  // delete one record
  deleteProject(id : string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/projects/` + id + `.json`);
  }
}
