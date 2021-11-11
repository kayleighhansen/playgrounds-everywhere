import { Component, Injectable, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddContactComponent implements OnInit {
  
  contact: Contact;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // json list of options
    let organizationsList = [{value:'',name:''},{value: '0',name: 'Hansen Web Consulting'},{value: '0',name: 'SEEEme'},{value: '2',name: 'The US Government'}];

    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    for (const item of organizationsList ) {
      var option = document.createElement("option");
      option.value = item.value;
      option.text = item.name;

      selectList.appendChild(option);
    }
  }

  onSubmit(form: NgForm) {

    const value = form.value;
    const newContact = new Contact(
      "",
      value.fname,
      value.lname,
      value.email,
      value.phone,
      value.country,
      value.organizationId,
      value.job,
      value.details
    );

    // ADD THE CONTACT TO DATABASE
    console.log(newContact);
    this.contactService.addContact(newContact);

    // SEND USER BACK TO THE CONTACT PAGE
    this.router.navigate(['/contacts']);
  }

  onClear() {
  }
}
