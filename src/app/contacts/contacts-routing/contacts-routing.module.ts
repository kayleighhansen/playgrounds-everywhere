import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactsComponent } from '../contacts.component';


const routes: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'add', component: AddContactComponent},
  { path: ':id', component: ContactDetailsComponent},
  { path: ':id/edit', component: AddContactComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ContactsRoutingModule { }
