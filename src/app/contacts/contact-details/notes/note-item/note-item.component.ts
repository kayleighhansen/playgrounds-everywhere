import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;

  isFetching: boolean;
  isEmpty: boolean;

  error: string;

  public notes: Note[] = [];
  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");


  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void { }

  onEdit() {}

  onDelete(id) {
    console.log(id);

    this.noteService.deleteNote(id).subscribe(() => { 
      this.notes = [id];
    });
  }
}
