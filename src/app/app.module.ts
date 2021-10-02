import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'follow-up', component: FollowUpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FollowUpComponent,
    ProjectsComponent,
    HeaderComponent,
    HeadingComponent,
    HomeComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
