import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ListComponent } from '../../../components/list/list.component';

@Component({
  selector: 'app-jsonify',
  standalone: true,
  imports: [RouterModule, IntroComponent, DividerComponent, ListComponent],
  templateUrl: './jsonify.component.html',
  styleUrl: './jsonify.component.scss',
})
export class JsonifyComponent {
  title: string = 'JSONify Plugin: Export Text into Structured JSON Data';
  text: string[] = [
    'JSONify was born out of a simple frustration: while working on a project, I found myself constantly copying text from Figma to structure it for my JSON files. It was repetitive, tedious, and disrupted my flow. So I built JSONify. A Plugin that can turn text into structured JSON files in seconds.',
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
