import { Component, Input } from '@angular/core';
import {NoteDetails} from "../note-details";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [],
  templateUrl: 'note-details.component.html',
  // template: `
  //     <section>
  //         <h2 class="note-heading">{{noteDetails.name}}</h2>
  //         <p>{{noteDetails.message}}</p>
  //     </section>
  // `,
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent {
@Input() noteDetails!: NoteDetails;
}
