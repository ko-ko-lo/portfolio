import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-jsonify',
  standalone: true,
  imports: [RouterModule, IntroComponent],
  templateUrl: './jsonify.component.html',
  styleUrl: './jsonify.component.scss',
})
export class JsonifyComponent {
  title: string = 'Jsonify Plugin: Export Text into Structured JSON Data';
  text: string[] = [
    'Jsonify was born out of a simple frustration. While working on my heart project, the yoga web application, I found myself constantly copying text from Figma designs to structure it for my JSON files. It was repetitive, tedious, and disrupted my flow. So, I built Jsonify. A little plugin that can turn text from Figma layers into structured JSON files in seconds. It respects layer names, groups, and hierarchies, so the content stays organized and ready for use.',
    "This plugin isn't just about efficiency, it's a little reflection of the joy I find in creating tools that make creative work smoother. Jsonify is part of my journey, learning and building as I go.",
  ];
}
