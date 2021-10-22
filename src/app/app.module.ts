import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { DropdownDirective } from './dropdown.directive';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { AddOrganizationComponent } from './organizations/add-organization/add-organization.component';
import { OrganizationListComponent } from './organizations/organization-list/organization-list.component';
import { OrganizationItemComponent } from './organizations/organization-item/organization-item.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'todos', component: TodosComponent}, 
  { path: 'add-contact', component: AddContactComponent},
  { path: 'add-organization', component: AddOrganizationComponent},
  { path: 'add-project', component: AddProjectComponent},
  { path: 'contact-detail', component: ContactDetailsComponent}, 
  { path: 'add-todo', component: AddTodoComponent},
];

const firebaseConfig = {
  apiKey: "AIzaSyDBcuS-jMLjBM3Dbj72C3AAtMQq1_aRavo",
  authDomain: "playgrounds-everywhere.firebaseapp.com",
  projectId: "playgrounds-everywhere",
  storageBucket: "playgrounds-everywhere.appspot.com",
  messagingSenderId: "32300982326",
  appId: "1:32300982326:web:7c4d7d611b5e7a04193897",
  measurementId: "G-NWWVEL4E9V"
}

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ProjectsComponent,
    HeaderComponent,
    HomeComponent,
    AddContactComponent,
    AddProjectComponent,
    DropdownDirective,
    ContactItemComponent,
    ContactListComponent,
    ProjectListComponent,
    ProjectItemComponent,
    OrganizationsComponent,
    AddOrganizationComponent,
    OrganizationListComponent,
    OrganizationItemComponent,
    ContactDetailsComponent,
    TodosComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
