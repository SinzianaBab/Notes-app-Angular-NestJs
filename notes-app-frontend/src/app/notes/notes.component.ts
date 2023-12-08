import {Component, OnInit} from '@angular/core';
import {NoteDetailsComponent} from "../note-details/note-details.component";
import {NoteDetails} from "../note-details";
import {NoteService} from "../note.service";
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteDetailsComponent, NgFor, NgIf, UpperCasePipe, FormsModule],
  templateUrl: 'notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent implements OnInit{

  selectedNote?: NoteDetails;
  notes: NoteDetails[] = [];

  constructor(private noteService: NoteService, private messageService : MessageService) {
  }

  ngOnInit(): void {
    this.getNotes();
  }
  onSelect(note: NoteDetails): void {
    this.selectedNote = note
    this.messageService.add(`Notes component: Selected note id = ${note.id}`)
  }


  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
}
