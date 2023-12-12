import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {NoteDetailsComponent} from "./note-details/note-details.component";
import {NotesComponent} from "./notes/notes.component";
import {MessagesComponent} from "./messages/messages.component";
import {HttpClientModule} from "@angular/common/http";
import {NoteFormComponent} from "./note-form/note-form.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailsComponent,
    MessagesComponent,
    NoteFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
