import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AddContactComponent } from '../add-contact/add-contact.component';
import { AddProjectComponent } from '../add-project/add-project.component';
import { AddOrganizationComponent } from '../add-organization/add-organization.component';


const appRoutes: Routes =[
  { path: 'add-contact', component: AddContactComponent},
  { path: 'add-project', component: AddProjectComponent},
  { path: 'add-organization', component: AddOrganizationComponent},
];

@NgModule({
  declarations: [
    AddContactComponent,
    AddProjectComponent,
    AddOrganizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class HomeModule { }
