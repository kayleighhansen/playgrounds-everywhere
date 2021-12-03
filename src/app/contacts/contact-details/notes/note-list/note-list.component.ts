import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {

  notes: Note[] = [];
  note: Note;

  originalNote: Note;
  editMode: boolean = false;

  @ViewChild('textInput', {static: false}) textInput: ElementRef;

  id: string;
  contactId = window.location.href.replace("http://localhost:4200/contacts/", "");
  isFetching: boolean;
  isEmpty: boolean;
  error: string;
  private noteChangeSub: Subscription;

  constructor(private noteService: NoteService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.LoadNotes();
  }

   ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['/contacts/' + this.contactId]); 
      this.LoadNotes();  
      this.isFetching = false; 
    }, 800);
  }

  LoadNotes() {
    this.noteService.fetchNotes(this.contactId);

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

    console.log(newNote);

    this.noteService.addNote(newNote);

    this.noteService.fetchNotes(newNote.contactId);

    this.isFetching = true;

    this.ngAfterViewInit();

    this.textInput.nativeElement.value = null;
  }

  ngOnDestroy(): void {
    this.noteService.noteListChanged.unsubscribe();
  }
}
