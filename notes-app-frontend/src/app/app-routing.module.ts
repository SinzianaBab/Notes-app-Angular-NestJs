import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotesComponent} from "./notes/notes.component";
import {NoteFormComponent} from "./note-form/note-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
  {path: 'notes', component: NotesComponent},
  {path: 'note-form', component: NoteFormComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
