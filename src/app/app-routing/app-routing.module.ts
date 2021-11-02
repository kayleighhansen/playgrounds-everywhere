import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { AddContactComponent } from '../contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from '../contacts/contact-details/contact-details.component';
import { AddOrganizationComponent } from '../organizations/add-organization/add-organization.component';
import { OrganizationsComponent } from '../organizations/organizations.component';
import { AddProjectComponent } from '../projects/add-project/add-project.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AddTodoComponent } from '../todos/add-todo/add-todo.component';
import { TodosComponent } from '../todos/todos.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent, children:
    [
      { path: '', component: ContactsComponent},
      { path: 'add', component: AddContactComponent},
      { path: ':id', component: ContactDetailsComponent},
      { path: ':id/edit', component: AddContactComponent}
    ] 
  }, 
  { path: 'projects', component: ProjectsComponent, children:
    [
      { path: 'add', component: AddProjectComponent},
      { path: ':id', component: AddProjectComponent},
      { path: ':id/edit', component: AddProjectComponent}
    ]
  },
  { path: 'organizations', component: OrganizationsComponent, children:
    [
      { path: 'add', component: AddOrganizationComponent},
      { path: ':id', component: AddOrganizationComponent},
      { path: ':id/edit', component: AddOrganizationComponent}
    ] 
  },

  { path: 'todos', component: TodosComponent , children:
    [
      { path: 'add', component: AddTodoComponent},
      { path: ':id', component: AddTodoComponent},
      { path: ':id/edit', component: AddTodoComponent}
    ] 
  }, 
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
