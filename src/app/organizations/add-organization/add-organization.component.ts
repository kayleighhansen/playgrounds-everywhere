import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';
import { Contact } from '../../contacts/contact.model';
import { ContactService } from '../../contacts/contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddOrganizationComponent implements OnInit {

  organization: Organization;

  fetchContactsSubscription: Subscription;
  public contacts: Contact[] = [];

  constructor(private organizationService: OrganizationService,
              private router: Router,
              private route: ActivatedRoute,
              private contactServices: ContactService) { }

  ngOnInit(): void {
    // json list of options
    // let contactsList = [{ value: '0', fname: 'Kayleigh', lname: 'Hansen'},  { value: '1', fname: 'Zayne', lname: ''  },{ value: '2', fname: 'Judith', lname: 'Nalube' }];

    // const selectList = document.getElementsByClassName("contactSelectList")[0];

    // for (const item of contactsList ) {
    //   var option = document.createElement("option");
    //   option.value = item.value;
    //   option.text = item.fname + " " + item.lname;

    //   selectList.appendChild(option);
    // }
    const list = this.contactServices.fetchContacts();
    const selectList = document.getElementsByClassName("contactSelectList")[0];

    this.fetchContactsSubscription = this.contactServices.fetchContactsEvent.subscribe((result) => {

      this.contacts = result;
      console.log(this.contacts);

      if(this.contacts.length < 1) {
      }

      this.contacts.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.fname + " " + res.lname;
    
        selectList.appendChild(option);
      }); 
      
    });

  }

  onSubmit(form: NgForm) {

    const value = form.value;
    const newOrganization = new Organization(
      "",
      value.name,
      value.country,
      value.city,
      value.email,
      value.phone,
      value.contactId,
      new Date().toLocaleDateString(),
      value.type,
      value.details
    );

    // ADD THE CONTACT TO DATABASE
    console.log(newOrganization);
    this.organizationService.addOrganization(newOrganization);

    // SEND USER BACK TO THE CONTACT PAGE
    this.router.navigate(['/organizations']);
  }
  onClear() {

  }

}
 