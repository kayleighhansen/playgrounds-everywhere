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

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: 'add-contact', component: AddContactComponent},
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
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
