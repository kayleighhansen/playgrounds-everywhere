import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { ProjectsComponent } from './projects/projects.component';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FollowUpComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
   //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
