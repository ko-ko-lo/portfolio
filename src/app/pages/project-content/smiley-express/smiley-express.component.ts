import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsSmallComponent } from '../../../components/technical-tools-small/technical-tools-small.component';

@Component({
  selector: 'app-smiley-express',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RouterModule,
    IntroComponent,
    TechnicalToolsSmallComponent,
    ScrollMenuComponent,
  ],
  templateUrl: './smiley-express.component.html',
  styleUrl: './smiley-express.component.scss',
})
export class SmileyExpressComponent {
  title: string = 'Smiley Express: Hop On and Pick a Mood!';
  text: string =
    'Smiley Express is a playful Figma plugin that delivers a collection of hand-drawn emojis to match every mood, ready to drop into designs with a click.';

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. Features & Visual Design' },
    { id: 'section3', label: '3. Development Insights' },
    { id: 'section4', label: '4. Final Reflections' },
  ];
}
