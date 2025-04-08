import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-highlight',
  standalone: true,
  imports: [],
  templateUrl: './text-highlight.component.html',
  styleUrl: './text-highlight.component.scss',
})
export class TextHighlightComponent {
  @Input() highlightText: string = '';
}
