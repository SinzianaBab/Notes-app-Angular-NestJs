import { Injectable } from '@angular/core';
import {NoteDetails} from "./note-details";
import {NOTES} from "./mock-notes";
import {catchError, Observable, of, throwError} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {NoteClass} from "./NoteClass";


@Injectable({
  providedIn: 'root',

})
export class NoteService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private baseUrl= 'http://localhost:3001/notes';
  getNotes(route: string): Observable<NoteDetails[]>{
    // this.messageService.add("Notes Service: fetched notes");
    const notesUrl = `${this.baseUrl}/${route}`;
    return this.http.get<NoteDetails[]>(notesUrl).pipe(catchError(this.handleError));
  }

  getNoteById(id: number): Observable<NoteDetails>{
    const noteUrl = `${this.baseUrl}/${id}`;
    return this.http.get<NoteDetails>(noteUrl).pipe(catchError(this.handleError));
  }

  postNote(note: NoteClass): Observable<NoteClass>{
    return this.http.post<NoteClass>(this.baseUrl, note).pipe(catchError(this.handleError));
  }

  deleteNote(id: number): Observable<NoteDetails>{
    const noteUrl = `${this.baseUrl}/${id}`;
    return this.http.delete<NoteDetails>(noteUrl).pipe(catchError(this.handleError))
  }

  updateNote(id: number, note: NoteClass): Observable<NoteDetails>{
    const noteUrl = `${this.baseUrl}/${id}`;
    return this.http.put<NoteDetails>(noteUrl, note).pipe(catchError(this.handleError))
  }

  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }




}
