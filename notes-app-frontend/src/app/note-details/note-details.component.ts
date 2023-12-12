import {Component, Input, OnInit} from '@angular/core';
import {NoteDetails} from "../note-details";
import {NoteService} from "../note.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-note-details',
  templateUrl: 'note-details.component.html',
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent implements OnInit {
  note: NoteDetails | undefined;
  selectedNote?: NoteDetails;

  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
  ) {
  }

  ngOnInit() {
    this.noteService.getNotes('all')
  }

  getNote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(id).subscribe(note => this.note = note);
  }

  updateNote(id:number, note: NoteDetails){
    this.noteService.updateNote(note.id, note).subscribe({
      next: res=>{
        console.log("Note updated successfully: ", res);
        location.reload();
      },
      error: err =>{
        console.error("Error updating note: ", err)
      }
    })
  }

  @Input() noteDetails?: NoteDetails;
}
