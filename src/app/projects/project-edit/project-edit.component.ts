import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/contacts/contact.model';
import { ContactService } from '../../contacts/contact.service';
import { Organization } from 'src/app/organizations/organization.model';
import { OrganizationService } from '../../organizations/organization.service';
import { NgForm } from '@angular/forms';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectEditComponent implements OnInit {

  public project: Project;
  id:string;
  fetchProjectsSubscription: Subscription;
  error:string;
  fetchOrganizationsSubscription: Subscription;
  fetchContactsSubscription: Subscription;
  organizationName: string;
  public organization: Organization;
  public organizations: Organization[] = [];
  public projects: Project[] = [];
  contact: Contact;
  contacts: Contact[] = [];
  contactName:string;
  originalProject: Project;

  constructor(private contactService: ContactService, 
              private organizationService: OrganizationService, 
              private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LoadDetails();
  }

  LoadDetails() {
    this.projectService.fetchProjects();

    this.id = window.location.href.replace("http://localhost:4200/projects/", "").replace("/edit", "");

    this.fetchProjectsSubscription = this.projectService.fetchProjectsEvent.subscribe((result) => {
      result.forEach((x) => {
        if (x.id == this.id) {
          this.project = x ;
        } 
      }
    );

    this.setCountryList();
    this.getOrganizationList();
    this.organizationName = this.getOrganizationName();
    this.getContactList();
    this.contactName = this.getContactName();
    
    }, error => {
      this.error = error.message;
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

    const list = document.getElementById("input-country");

    countryList.forEach((res) => {
      var option = document.createElement("option");
      option.value = res;
      option.text = res;

      if (option.value == this.project.country) {
        option.selected = true;
      };

      list.appendChild(option);
    });
  }

  getOrganizationList() {
    this.organizationService.fetchOrganizations();
    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationEvent.subscribe((result) => {

      this.organizations = result;

      this.organizations.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.name;
        option.id = res.id;

        if (option.value == this.project.organizationId) {
          option.selected = true;
        };
    
        selectList.appendChild(option);
      }); 
      
    });
  }

  getOrganizationName(): string {
    this.organizationService.fetchOrganizations();

    this.fetchOrganizationsSubscription = this.organizationService.fetchOrganizationsEvent.subscribe((result) => {
      result.forEach((res) => {
        if (res.id == this.project.organizationId) {
          this.organizationName = res.name;
        }});
      });
    return this.organizationName;
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

        if (option.value == this.project.contactId) {
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
        if (res.id == this.project.contactId) {
          this.contactName = res.fname + " " + res.lname;
        }});
      });
    return this.contactName;
  }

  onSubmit(form: NgForm){
    this.originalProject = this.project;
    
    const value = form.value;

    const newProject = new Project(
      this.project.id,
      value.name,
      value.organizationId,
      value.contactId,
      value.date,
      value.location,
      value.country,
      value.city,
      value.equipment,
      value.equipmentAmount,
      value.donation,
      value.donationAmount,
      value.price,
      value.details,
      value.results);

      console.log(newProject);

      this.projectService.updateProject(this.originalProject, newProject);

    this.router.navigate(['/projects']);
  }

  onDelete(id) {
    console.log(id);
    this.projectService.deleteProject(id).subscribe(() => { 
      this.projects = [id];
      this.router.navigate(['/projects']);
    });
  }

  ngOnDestroy(): void {
    this.fetchOrganizationsSubscription.unsubscribe();
    this.fetchContactsSubscription.unsubscribe();
    this.fetchProjectsSubscription.unsubscribe();
  }

}
