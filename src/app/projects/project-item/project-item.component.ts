import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Input() id: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void { 
  }

}
