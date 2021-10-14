import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DropdownDirective } from './dropdown.directive';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { OrganizationListComponent } from './organizations/organization-list/organization-list.component';
import { OrganizationItemComponent } from './organizations/organization-item/organization-item.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: 'add-contact', component: AddContactComponent},
  { path: 'add-organization', component: AddOrganizationComponent},
  { path: 'add-project', component: AddProjectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FollowUpComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
