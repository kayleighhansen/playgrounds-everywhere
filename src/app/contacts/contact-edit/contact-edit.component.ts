import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { OrganizationService } from '../../organizations/organization.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Organization } from 'src/app/organizations/organization.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class ContactEditComponent implements OnInit, OnDestroy {

  public contacts: Contact[] = [];
  public contactsArray: Contact[] = [];
  public organizations: Organization[] = [];

  public contact: Contact;
  originalContact: Contact;
  organization: Organization;

  public organizationName: string;
  id: string; 
  error: string;

  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;
  fetchOrganizationSubscription: Subscription;

  constructor(private contactService: ContactService,
              private organizationService: OrganizationService,
              private router: Router) { }

  // initialize with details            
  ngOnInit(): void {
    this.LoadDetails();
  }

  // load the details for editing
  LoadDetails() {
    this.contactService.fetchContacts();

    this.id = window.location.href.replace("http://localhost:4200/contacts/", "").replace("/edit", "");

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.contact = x ;
        } 
      }
    );

    this.setCountryList();
    this.getOrganizationList();
    this.organizationName = this.getOrganizationName();
    
    }, error => {
      this.error = error.message;
    });
  }

  // get list of organizations
  getOrganizationList() {
    this.organizationService.fetchOrganizations();
    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    this.fetchOrganizationSubscription = this.organizationService.fetchOrganizationEvent.subscribe((result) => {

      this.organizations = result;

      this.organizations.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.name;
        option.id = res.id;

        if (option.value == this.contact.organizationId) {
          option.selected = true;
        };
    
        selectList.appendChild(option);
      }); 
      
    });
  }

  // set list of countries
  setCountryList() {
    const countryList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos Islands",
      "Colombia",
      "Comoros",
      "Democratic Republic of the Congo",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Côte d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Macedonia",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Korea",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Svalbard",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Virgin Islands",
      "Virgin Islands",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands"
    ];

    const list = document.getElementById("homeCountry");
    console.log(this.contact.country);

    countryList.forEach((res) => {
      var option = document.createElement("option");
      option.value = res;
      option.text = res;

      if (option.value == this.contact.country) {
        option.selected = true;
      };

      list.appendChild(option);
    });
  }

  // get name of organization
  getOrganizationName(): string {
    this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((res) => {
        if (res.id == this.contact.organizationId) {
          this.organizationName = res.name;
        }});
      });
    return this.organizationName;
  }

  // submit form
  onSubmit(form: NgForm) {
    this.originalContact = this.contactService.getContact(this.id);
    
    const value = form.value;

    console.log(form.value.country);
    console.log(form.value.organizationId);

    const newContact = new Contact(
      this.contact.id,
      value.fname,
      value.lname, 
      value.email, 
      value.phone, 
      value.country, 
      value.organizationId, 
      value.job, 
      value.details);

      console.log(this.originalContact);

      this.contactService.updateContact(this.originalContact, newContact);

      console.log(newContact);

    this.router.navigate(['/contacts']);
  }

  // delete contact
  onDelete(id) {
    console.log(id);
    this.contactService.deleteContact(id).subscribe(() => { 
      this.contacts = [id];
      this.router.navigate(['/contacts']);
    });
  }

  // unsubscribe
  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
    this.fetchOrganizationSubscription.unsubscribe();
  }
}
