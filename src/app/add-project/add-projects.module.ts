import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { ProjectsComponent } from '../projects/projects.component';

const appRoutes: Routes =[
  { path: 'back', component: ProjectsComponent}
];

@NgModule({
  declarations: [
    ProjectsComponent
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