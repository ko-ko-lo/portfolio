import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-menu.component.html',
  styleUrl: './scroll-menu.component.scss',
})
export class ScrollMenuComponent {
  @Input() sections: { id: string; label: string }[] = [];

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
