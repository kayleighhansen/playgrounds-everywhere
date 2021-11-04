import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project: Project;
  id: string;

  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = params['contactId'];
      this.project = this.projectService.getProject(this.id);
    }); 
  }
}
