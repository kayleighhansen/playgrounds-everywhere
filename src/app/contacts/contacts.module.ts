import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DropdownDirective } from '../dropdown.directive';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const appRoutes: Routes =[
  { path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  declarations: [
    AddContactComponent,
    ContactItemComponent,
    ContactListComponent,
    DropdownDirective,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
