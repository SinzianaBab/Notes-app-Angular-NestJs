import {Component, OnInit} from '@angular/core';
import {NoteDetails} from "../note-details";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent implements OnInit {

  selectedNote?: NoteDetails;
  notes: NoteDetails[] = [];
  note: NoteDetails = <NoteDetails>{};
  search: string ="";

  constructor(private noteService: NoteService,
  ) {
  }

  ngOnInit(): void {
    this.getNotes('all');
    // this.postNote(this.note);
  }

  onDelete(id: number): void {
    this.noteService.deleteNote(id).subscribe({
      next: res => {
        console.log("Note successfully deleted: ", res);
        location.reload();
      },
      error: err => {
        console.error("Error deleting note:", err);
      }
    });
  }

  searchByName(): void {
    if (this.search) {
      this.noteService.searchByName(this.search).subscribe(filteredNotes => {
        this.notes = filteredNotes;
        console.log(this.search);
      });
    } else {
      this.getNotes('all');
    }
  }

  resetSearch(): void{
    location.reload();
  }
  onSelect(note: NoteDetails): void {
    this.selectedNote = note
    // this.messageService.add(`Notes component: Selected note id = ${note.id}`)
  }


  getNotes(route: string): void {
    this.noteService.getNotes('all')
      .subscribe(notes => this.notes = notes);
  }

}
