import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { AddContactComponent } from '../add-contact/add-contact.component';

const appRoutes: Routes =[
  { path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  declarations: [
    AddContactComponent
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
