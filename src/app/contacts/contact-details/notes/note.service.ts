import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private notesArray: Note[] = [];
  fetchNotesEvent = new Subject<Note[]>();
  noteListChanged = new Subject<Note[]>();

  constructor(private http: HttpClient, private router: Router) { }

  fetchNotes(contactId) {
    this.http
      .get<Note[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/notes.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key})
            }
          }
          return postsArray;
        })
      )
      .subscribe(notes => {
        
        this.notes = notes;
        this.notes.forEach((result)=> {
          if (result.contactId = contactId) {
            this.notesArray.push(result);
          }
        });
        
        this.fetchNotesEvent.next(this.notes);

        this.notes.sort((a , b) => 
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0);
        this.noteListChanged.next(this.notes.slice());
      });

    return this.notesArray;
  }

  getNote(id: string): Note {
    return this.notes.find((note) => note.id === id)
  } 

  addNote(newNote: Note) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/notes.json`, newNote)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  deleteNote(id: string) {
    return this.http.delete(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/notes/` + id + `.json`);
  }
}
