import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technical-tools-small',
  standalone: true,
  imports: [],
  templateUrl: './technical-tools-small.component.html',
  styleUrl: './technical-tools-small.component.scss',
})
export class TechnicalToolsSmallComponent {
  @Input() textTechnologies: string =
    'TypeScript, JavaScript, HTML, CSS, Figma Design & API ';
}
