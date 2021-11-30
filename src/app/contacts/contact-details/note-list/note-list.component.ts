import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {

  notes: Note[] = [];
  note: Note;

  id: string;
  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");
  isFetching: boolean;
  isEmpty: boolean;
  error: string;

  private noteChangeSub: Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.LoadNotes();
  }

  LoadNotes() {

    this.noteService.fetchNotes(this.contactId);
    this.isFetching = true;

    this.noteChangeSub = this.noteService.noteListChanged.subscribe(
      (notes: Note[]) => {
        this.notes = notes;

      if(this.notes.length < 1) {
        this.isEmpty= true;
      }

    }, error => {
      this.error = error.message;
    });
  }

  addNote(form: NgForm) {

    const value = form.value;
    const newNote = new Note(
      "",
      new Date().toLocaleDateString(),
      value.text,
      this.contactId
    )

    this.noteService.addNote(newNote);

    // reload notes
  }

  ngOnDestroy(): void {
    this.noteService.noteListChanged.unsubscribe();
  }

}
