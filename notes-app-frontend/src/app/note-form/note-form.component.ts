import {Component} from '@angular/core';
import {NoteClass} from "../NoteClass";
import {NoteService} from "../note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  model = new NoteClass("", "");
  submitted = false;

  constructor(private noteService: NoteService, private router:Router) {
  }

  onSubmit() {
    this.submitted = true;
    this.noteService.postNote(this.model)
      .subscribe({
        next: response => {
          console.log("Note successfully posted:", response);
          this.model = new NoteClass(this.model.name, this.model.message);
          this.router.navigate(['/notes'])
        },
        error: error => {
          console.error("Error posting note:", error);
        }
      });
  }

}
