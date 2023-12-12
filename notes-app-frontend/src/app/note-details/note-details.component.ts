import {Component, Input, OnInit} from '@angular/core';
import {NoteDetails} from "../note-details";
import {ActivatedRoute} from "@angular/router";
import {NoteService} from "../note.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-note-details',
  templateUrl: 'note-details.component.html',
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent implements OnInit{
  note: NoteDetails | undefined;
  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
              private location: Location
  ) {}
  ngOnInit() {this.noteService.getNotes('all')}

  getNote(): void{
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(id).subscribe(note => this.note = note);
  }

goBack(): void{
    this.location.back();
}
  @Input() noteDetails?: NoteDetails;
}
