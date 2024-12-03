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
  title: string = 'JSONify Plugin: Export Text into Structured JSON Data';
  text: string[] = [
    'JSONify was born out of a simple frustration. While working on a project, I found myself constantly copying text from Figma to structure it for my JSON files. It was repetitive, tedious, and disrupted my flow. So I built JSONify. A plugin that can turn text from Figma layers into structured JSON files in seconds. It respects layer names, groups, and hierarchies, so the content stays organized.',
    "This plugin isn't just about efficiency, it's a little reflection of the joy I find in creating tools that make creative work smoother. JSONify is part of my journey, learning and building as I go.",
  ];

  codeSnippet: string = `
  // Queue for level-order traversal
let queue: SceneNode[] = [root];
let jsonOutput: { [key: string]: any } = {};

while (queue.length > 0) {
  // Process the first node in the queue
  let node = queue.shift()!;

  if (node.name.startsWith("exclude-")) continue;

  // Handle text nodes
  if (node.type === "TEXT") {
    jsonOutput[node.name] = node.characters.trim();
  }
  // Handle group nodes as arrays
  else if (node.type === "GROUP") {
    let groupArray = node.children.map((child) =>
      child.type === "TEXT" ? child.characters.trim() : null
    );
    jsonOutput[node.name] = groupArray.filter(Boolean);
  }

  // Add children to the queue for further traversal
  if ("children" in node && node.children) {
    queue.push(...node.children);
  }
}
`;

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
