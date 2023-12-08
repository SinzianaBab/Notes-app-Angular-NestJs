import { Component } from '@angular/core';
import {Note} from "./note";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
note: Note={ id: 4, name: "Some Note", message: "Be happy!"}
}
