import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  fetchNotesEvent = new Subject<Note[]>();
  noteListChanged = new Subject<Note[]>();

  
  constructor(private http: HttpClient) { }

  fetchNotes(contactId) {
    this.http
      .get<Note[]>('https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/' + contactId + '/notes.json')
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
        this.fetchNotesEvent.next(this.notes);

        this.notes.sort((a , b) => 
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0);
        this.noteListChanged.next(this.notes.slice());
      });

    return;
  }

  addNote(newNote: Note) {
    this.http.post(`https://playgrounds-everywhere-default-rtdb.firebaseio.com/contacts/`+ newNote.contactId + `/notes.json`, newNote)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
