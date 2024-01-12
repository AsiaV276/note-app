import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, NotesListComponent, AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noteApp';
  isHighlighted = false;
  btnName = false;
  loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  highlight() {
    this.isHighlighted = true;
  }

  isRed = false;

  change() {
    this.isRed = !this.isRed;
  }

  products: string[] = ['orange', 'banana', 'apple']


}
