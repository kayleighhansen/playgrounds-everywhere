import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
