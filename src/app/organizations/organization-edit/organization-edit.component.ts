import { Component, OnDestroy, OnInit } from '@angular/core';
import { Organization } from '../organization.model';
import { Contact } from 'src/app/contacts/contact.model';
import { OrganizationService } from '../organization.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/contacts/contact.service';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationEditComponent implements OnInit, OnDestroy {

  public organization: Organization;
  public originalOrganization: Organization;
  public organizations: Organization[] = [];

  public contacts: Contact[] = [];

  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;

  id: string;
  error: string;

  contactName: string;


  constructor(private contactService: ContactService, 
              private organizationService: OrganizationService,
              private router: Router) { }

  // initialize loading details first            
  ngOnInit(): void { 
    this.LoadDetails();
  }

  // load the details based on id in the url
  LoadDetails() {
    this.organizationService.fetchOrganizations();

    this.id = window.location.href.replace("http://localhost:4200/organizations/", "").replace("/edit", "");

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((x) => {
        console.log(result);
        if (x.id == this.id) {
          this.organization = x ;
        } 
      }
    );

    this.setCountryList();
    this.getContactList();
    this.contactName = this.getContactName();
    
    }, error => {
      this.error = error.message;
    });
  }

  // submit the form
  onSubmit(form: NgForm) { 
    this.originalOrganization = this.organization;
    
    const value = form.value;

    const newOrganization = new Organization(
      this.organization.id,
      value.name,
      value.country,
      value.city,
      value.email,
      value.phone,
      value.contactId,
      value.date,
      value.type,
      value.details);

      console.log(newOrganization);

      this.organizationService.updateOrganization(this.originalOrganization, newOrganization);

      //console.log(newContact);

    this.router.navigate(['/organizations']);

  }

  // delete the organiztion
  onDelete(id) {
    console.log(id);
    this.organizationService.deleteOrganization(id).subscribe(() => { 
      this.organizations = [id];
      this.router.navigate(['/organizations']);
    });
  }

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
    console.log(this.organization);

    countryList.forEach((res) => {
      var option = document.createElement("option");
      option.value = res;
      option.text = res;

      list.appendChild(option);
    });
  }

  getContactList() {
    this.contactService.fetchContacts();
    const selectList = document.getElementsByClassName("contactSelectList")[0];

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {

      this.contacts = result;

      this.contacts.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.fname + " " + res.lname;
        option.id = res.id;

        if (option.value == this.organization.contactId) {
          option.selected = true;
        };
    
        selectList.appendChild(option);
      }); 
      
    });
  }

  getContactName(): string {
    this.contactService.fetchContacts();

    this.fetchContactsSubscription = this.contactService.fetchContactsEvent.subscribe((result) => {
      result.forEach((res) => {
        if (res.id == this.organization.contactId) {
          this.contactName = res.fname + " " + res.lname;
        }});
      });
    return this.contactName;
  }

  ngOnDestroy(): void {
    this.fetchContactsSubscription.unsubscribe();
    this.fetchOrganizationsSubscription.unsubscribe();
  }

}
