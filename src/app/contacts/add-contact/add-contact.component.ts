import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddContactComponent implements OnInit {
  @ViewChild('fnameInput') fnameInput: ElementRef;
  @ViewChild('lnameInput') lnameInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('numberInput') numberInput: ElementRef;
  @ViewChild('countryInput') countryInput: ElementRef;
  @ViewChild('jobInput') jobInput: ElementRef;
  @ViewChild('detailsInput') detailsInput: ElementRef;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  OnAddContact() {

    const fnameValue = this.fnameInput.nativeElement.value;
    const lnameValue = this.lnameInput.nativeElement.value;
    const emailValue = this.emailInput.nativeElement.value;
    const numberValue = this.numberInput.nativeElement.value;
    const countryValue = this. countryInput.nativeElement.value;
    const jobValue = this.jobInput.nativeElement.value;
    const detailValue = this.detailsInput.nativeElement.value;

    const contact = new Contact(
      '1',
      fnameValue,
      lnameValue,
      emailValue,
      numberValue,
      '',
      countryValue,
      jobValue,
      detailValue);

      // ADD THE MESSAGE TO DATABASE
      this.contactService.addContact(contact);

      // SEND BACK TO CONTACTS PAGE
      this.onClear();

      // Saved Correctly message
      alert("Message Saved Correctly!");
  }

  onClear() {
    this.fnameInput.nativeElement.value = "";
    this.lnameInput.nativeElement.value = "";
    this.emailInput.nativeElement.value = "";
    this.numberInput.nativeElement.value = "";
    this.countryInput.nativeElement.value= "";
    this.jobInput.nativeElement.value = "";
    this.detailsInput.nativeElement.value = "";
  }
}
