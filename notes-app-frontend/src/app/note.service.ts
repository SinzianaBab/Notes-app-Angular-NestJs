import { Injectable } from '@angular/core';
import {NoteDetails} from "./note-details";
import {NOTES} from "./mock-notes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private messageService: MessageService) { }

  getNotes(): Observable<NoteDetails[]>{
    const notes = of (NOTES);
    this.messageService.add("Notes Service: fetched notes");
    return notes;
  }
}
