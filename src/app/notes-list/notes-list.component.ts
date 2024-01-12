import { Component } from '@angular/core';
import { NOTES } from '../note';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="container">
    <nav>
      <button routerLink="./new">Add New</button>
    </nav>
    <ul class="notes">
      @for (note of notes; track note.id) {
        <li>
          <button class="notes" (click)="show(note.title)">
              <span class="note-title">{{note.title}}</span>
              <span class="note-text">{{note.text}}</span>
          </button>
        </li>
      }
    </ul>
  </div>
  `,
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title)
  }
}
