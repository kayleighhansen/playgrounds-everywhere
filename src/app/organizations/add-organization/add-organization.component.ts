import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddOrganizationComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('countryInput') countryInput: ElementRef;
  @ViewChild('cityInput') cityInput: ElementRef;
  @ViewChild('phoneInput') phoneInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('contactsInput') contactsInput: ElementRef;  
  @ViewChild('relationshipDate') relationshipDate: ElementRef;
  @ViewChild('typeInput') typeInput: ElementRef;
  @ViewChild('descriptionInput') descriptionInput: ElementRef;

  constructor(private organizationService: OrganizationService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    // json list of options
    let contactsList = [{  
      value: '0',  
      fname: 'Kayleigh',
      lname: 'Hansen'
    },  
    {  
      value: '1',  
      fname: 'Zayne',
      lname: ''  
    },{  
      value: '2',  
      fname: 'Judith',
      lname: 'Nalube'  
    }
  ];

    const selectList = document.getElementsByClassName("contactSelectList")[0];

    for (const item of contactsList ) {
      var option = document.createElement("option");
      option.value = item.value;
      option.text = item.fname + " " + item.lname;

      selectList.appendChild(option);
    }


    

  }

  OnAddOrganization() {
    const nameValue = this.nameInput.nativeElement.value;
    const countryValue = this.countryInput.nativeElement.value;
    const cityValue = this.cityInput.nativeElement.value;
    const phoneValue = this.phoneInput.nativeElement.value;
    const emailValue = this.emailInput.nativeElement.value;
    const contactsValue = this.contactsInput.nativeElement.value;
    const relationshipDateValue = this.relationshipDate.nativeElement.value;
    const orgTypeValue = this.typeInput.nativeElement.value;
    const descriptionValue = this.descriptionInput.nativeElement.value;

    const organization = new Organization(
      '1',
      nameValue,
      countryValue,
      cityValue,
      phoneValue,
      emailValue,
      contactsValue,
      relationshipDateValue,
      orgTypeValue,
      descriptionValue
    );

    //this.organizationService.addOrganization(organization);

    console.log(organization);

    // if (this.dataStorageService.saveData()) {
       alert("Organization Saved Correctly");
       this.onClear();
    // };
  }

  onClear() {
    this.nameInput.nativeElement.value = "";
    this.countryInput.nativeElement.value = "";
    this.cityInput.nativeElement.value = "";
    this.phoneInput.nativeElement.value = "";
    this.emailInput.nativeElement.value = "";
    this.contactsInput.nativeElement.value = "";
    this.relationshipDate.nativeElement.value = "";
    this.typeInput.nativeElement.value = "";
    this.descriptionInput.nativeElement.value= "";

  }

}
 