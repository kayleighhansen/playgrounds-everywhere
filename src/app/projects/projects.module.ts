import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AddProjectComponent } from '../add-project/add-project.component';

const appRoutes: Routes =[
  { path: 'add-project', component: AddProjectComponent}
];

@NgModule({
  declarations: [
    AddProjectComponent
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
