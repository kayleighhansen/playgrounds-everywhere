import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './dropdown.directive';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';


import { ContactsComponent } from './contacts/contacts.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';


import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationItemComponent } from './organizations/organization-item/organization-item.component';
import { OrganizationListComponent } from './organizations/organization-list/organization-list.component';
import { OrganizationEditComponent } from './organizations/organization-edit/organization-edit.component';
import { AddOrganizationComponent } from './organizations/add-organization/add-organization.component';
import { OrganizationDetailsComponent } from './organizations/organization-details/organization-details.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';


import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';

import { NoteListComponent } from './contacts/contact-details/note-list/note-list.component';
import { NoteItemComponent } from './contacts/contact-details/note-item/note-item.component';

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
    TodoDetailsComponent,
    TodoEditComponent,
    ContactsFilterPipe,
    ProjectEditComponent,
    ContactEditComponent,
    OrganizationEditComponent,
    OrganizationDetailsComponent,
    ProjectDetailsComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
