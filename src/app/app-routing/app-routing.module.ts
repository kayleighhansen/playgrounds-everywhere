import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { ContactsComponent } from '../contacts/contacts.component';
import { AddContactComponent } from '../contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from '../contacts/contact-details/contact-details.component';
import { ContactEditComponent } from '../contacts/contact-edit/contact-edit.component';

import { OrganizationsComponent } from '../organizations/organizations.component';
import { AddOrganizationComponent } from '../organizations/add-organization/add-organization.component';
import { OrganizationDetailsComponent } from '../organizations/organization-details/organization-details.component';
import { OrganizationEditComponent } from '../organizations/organization-edit/organization-edit.component';

import { ProjectsComponent } from '../projects/projects.component';
import { AddProjectComponent } from '../projects/add-project/add-project.component';
import { ProjectDetailsComponent } from '../projects/project-details/project-details.component';
import { ProjectEditComponent } from '../projects/project-edit/project-edit.component';

import { AddTodoComponent } from '../todos/add-todo/add-todo.component';
import { TodosComponent } from '../todos/todos.component';
import { TodoDetailsComponent } from '../todos/todo-details/todo-details.component';
import { TodoEditComponent } from '../todos/todo-edit/todo-edit.component';


const appRoutes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'contacts/add-contact', component:  AddContactComponent}, 
  { path: 'contacts/:id', component: ContactDetailsComponent }, 
  { path: 'contacts/:id/edit', component: ContactEditComponent }, 


  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add-project', component: AddProjectComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'projects/:id/edit', component: ProjectEditComponent },

  { path: 'organizations', component: OrganizationsComponent },
  { path: 'organizations/add-organization', component: AddOrganizationComponent },
  { path: 'organizations/:id', component: OrganizationDetailsComponent },
  { path: 'organizations/:id/edit', component: OrganizationEditComponent },

  { path: 'todos', component: TodosComponent}, 
  { path: 'todos/add-todo', component: AddTodoComponent },
  { path: 'todos/:id', component: TodoDetailsComponent },
  { path: 'todos/:id/edit', component: TodoEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
