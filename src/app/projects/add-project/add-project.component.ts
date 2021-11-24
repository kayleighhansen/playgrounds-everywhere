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
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddProjectComponent implements OnInit {

  fetchContactsSubscription: Subscription;
  fetchOrganizationsSubscription: Subscription;
  contact: Contact;
  organization: Organization;
  contacts: Contact[] = [];
  organizations: Organization[] = [];

  constructor(private contactServices: ContactService, 
              private organizationServices: OrganizationService, 
              private projectServices: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addContactsList();
    this.addOrganizationsList();
    this.addFormFeilds(); 
  }

  addContactsList() {
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

  addOrganizationsList() {
    const list = this.organizationServices.fetchOrganizations();
    const selectList = document.getElementsByClassName("organizationSelectList")[0];

    this.fetchOrganizationsSubscription = this.organizationServices.fetchOrganizationsEvent.subscribe((result) => {

      this.organizations = result;
      console.log(this.organizations);

      if(this.organizations.length < 1) {
      }

      this.organizations.forEach(res => {
        var option = document.createElement("option");
        option.value = res.id;
        option.text = res.name;
    
        selectList.appendChild(option);
      }); 
    });

  }

  addFormFeilds() {
    document.getElementById("add-equipment").addEventListener("click", function() {
      let quantities = document.getElementsByClassName("quantity-input-container")[0];

      let quantityInput = document.createElement("div");
      quantityInput.className="quantity-input";
      quantityInput.setAttribute("style", "display: grid; grid-template-columns: 15% 70% 10%; gap: 2.5%;");

      let div1 = document.createElement("div");
        let small1 = document.createElement("small");
        small1.textContent = "Quantity";
        small1.setAttribute("style", "color: #74B187;");
        div1.appendChild(small1);

        let inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.className = "form-control";
        inputQuantity.setAttribute("id", "equipment-quantity");
        inputQuantity.placeholder = "(1)";
        div1.appendChild(inputQuantity);

      quantityInput.appendChild(div1);

      let div2 = document.createElement("div");
        let small2 = document.createElement("small");
        small2.textContent = "Equipment";
        small2.setAttribute("style", "color: #74B187;");
        div2.appendChild(small2);

        let inputEquipment = document.createElement("input");
        inputEquipment.type = "text";
        inputEquipment.className = "form-control";
        inputEquipment.setAttribute("id", "equipment-name");
        inputEquipment.placeholder = "(Swingset)";
        div2.appendChild(inputEquipment);

      quantityInput.appendChild(div2);

      quantities.appendChild(quantityInput);
    });

    document.getElementById("add-donation").addEventListener("click", function() {
      let quantities = document.getElementsByClassName("donation-input-container")[0];

      let quantityInput = document.createElement("div");
      quantityInput.className="quantity-input";
      quantityInput.setAttribute("style", "display: grid; grid-template-columns: 15% 70% 10%; gap: 2.5%;");

      let div1 = document.createElement("div");
        let small1 = document.createElement("small");
        small1.textContent = "Quantity";
        small1.setAttribute("style", "color: #74B187;");
        div1.appendChild(small1);

        let inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.className = "form-control";
        inputQuantity.setAttribute("id", "equipment-quantity");
        inputQuantity.placeholder = "(1)";
        div1.appendChild(inputQuantity);

      quantityInput.appendChild(div1);

      let div2 = document.createElement("div");
        let small2 = document.createElement("small");
        small2.textContent = "Equipment";
        small2.setAttribute("style", "color: #74B187;");
        div2.appendChild(small2);

        let inputEquipment = document.createElement("input");
        inputEquipment.type = "text";
        inputEquipment.className = "form-control";
        inputEquipment.setAttribute("id", "equipment-name");
        inputEquipment.placeholder = "(Tablet)";
        div2.appendChild(inputEquipment);

      quantityInput.appendChild(div2);

      quantities.appendChild(quantityInput);
    }
  )}

  onSubmit(form: NgForm) {
    const value = form.value;

    const newProject = new Project(
      "", 
      value.name, 
      value.organizationId, 
      value.contactId, 
      value.date, 
      value.country, 
      value.city, 
      value.equipment, 
      value.donation, 
      value.price, 
      value.details,
      value.results
    );

    this.projectServices.addProject(newProject);

    this.router.navigate(['/projects']);
  }

}
