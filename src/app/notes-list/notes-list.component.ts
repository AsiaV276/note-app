import { Component } from '@angular/core';
import { NOTES } from '../note';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [],
  template: `
  @for (note of notes; track note.id) {
    <div class="container">
      <ul class="notes">
        <li>
          <span class="note-title">{{note.title}}</span>
          <span class="note-text">{{note.text}}</span>
        </li>
      </ul>
    </div>
  }
  `,
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;
}
