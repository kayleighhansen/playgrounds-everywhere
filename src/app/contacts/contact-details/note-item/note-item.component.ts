import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;

  public notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    console.log(this.note);
  }

  onEdit() {}

  onDelete(id) {
    console.log(id);
    this.noteService.deleteNote(id).subscribe(() => { 
      this.notes = [id];
    });
  }

}
