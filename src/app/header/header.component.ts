import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <section>
      <h1>
        {{title}}
      </h1>
      <app-menu></app-menu>
    </section>
    
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "My Notes"
}
