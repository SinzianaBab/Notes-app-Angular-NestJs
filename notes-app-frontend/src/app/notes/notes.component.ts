import {Component} from '@angular/core';
import {NoteDetailsComponent} from "../note-details/note-details.component";
import {NoteDetails} from "../note-details";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteDetailsComponent],
  templateUrl:'notes.component.html',
  // template: `
  //     <section>
  //         <form>
  //             <input type="text" placeholder="Filter by name">
  //             <button class="primary" type="button">Search</button>
  //         </form>
  //         <section class="results">
  //             <app-note-details [noteDetails]="notesDetails"></app-note-details>
  //         </section>
  //     </section>
  // `,
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notesDetails: NoteDetails = {
    id: 5,
    name: "Some Note",
    message: "Some Message"
  }
}
