import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }
  @Input() contact: Contact;
  ngOnInit(): void {
  }

}
