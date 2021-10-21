import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';

const appRoutes: Routes =[
  { path: 'add-project', component: AddProjectComponent}
];

@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
