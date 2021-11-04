import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactEditComponent implements OnInit {
  @Input() contact: Contact;
  id: string;

  constructor(private contactService: ContactService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.contact);

    this.route.params
    .subscribe((params: Params) => {
      this.id = params['id'];
      this.contact = this.contactService.getContact(this.id);
    }); 
  }

}
