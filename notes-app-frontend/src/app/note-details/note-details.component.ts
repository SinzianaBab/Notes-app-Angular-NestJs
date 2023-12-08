import { Component, Input } from '@angular/core';
import {NoteDetails} from "../note-details";
import {CommonModule, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe, NgIf
  ],
  templateUrl: 'note-details.component.html',
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent {
@Input() noteDetails?: NoteDetails;
}
