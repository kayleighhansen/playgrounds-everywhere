import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AddContactComponent } from '../add-contact/add-contact.component';
import { AddProjectComponent } from '../add-project/add-project.component';

const appRoutes: Routes =[
  { path: 'add-contact', component: AddContactComponent},
  { path: 'add-project', component: AddProjectComponent}
];

@NgModule({
  declarations: [
    AddContactComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ]
})
export class HomeModule { }
