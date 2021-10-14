import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [
    new Project(1, 'White House Playground', 'The U.S. Government', '07-05-1998', 'USA', 'Washington D.C.', 'Swings', '', 2000, 'Michelle Obama', 'It went great', 'One swingset built'),
    new Project(2, 'White House Playground', 'The U.S. Government', '07-05-1998', 'USA', 'Washington D.C.', 'Swings', '', 2000, 'Michelle Obama', 'It went great', 'One swingset built'),
    new Project(3, 'White House Playground', 'The U.S. Government', '07-05-1998', 'USA', 'Washington D.C.', 'Swings', '', 2000, 'Michelle Obama', 'It went great', 'One swingset built'),
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
