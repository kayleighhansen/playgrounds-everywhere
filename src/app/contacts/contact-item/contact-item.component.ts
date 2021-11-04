import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['../../app.component.css']
})

export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() id: string;
 
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  } 

  onSelected() {
    this.contactService.contactSelectedEvent.emit(this.contact);
  } 
}
