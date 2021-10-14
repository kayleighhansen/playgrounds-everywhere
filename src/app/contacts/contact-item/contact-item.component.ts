import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.module';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
