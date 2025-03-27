import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-pattern-hearts',
  standalone: true,
  imports: [
    RouterModule,
    DividerComponent,
    IntroComponent,
    CodeGoodBadComponent,
  ],
  templateUrl: './pattern-hearts.component.html',
  styleUrl: './pattern-hearts.component.scss',
})
export class PatternHeartsComponent {
  title: string = 'Love Comes in All Patterns: A Fun Figma Plugin';
  text: string[] = [
    'This plugin brings a collection of crafted, patterned hearts to Figma designs - perfect for adding warmth, charm, and creativity. Whether used to celebrate, connect, or simply bring warmth to a design, the hearts are a playful tool with an underlying message: love comes in all patterns.',
  ];

  exampleCode1: string = `const node = figma.createNodeFromSvg(heartSVG);
const heartVector = node.findOne((n) => n.type === "VECTOR") as VectorNode;

figma.currentPage.appendChild(heartVector);
node.remove();
  `;
  exampleCode2: string = `const gradientFill: GradientPaint = {
    type: "GRADIENT_LINEAR",
    gradientStops: [...],
    gradientTransform: [...],
  };

heartVector.fills = [gradientFill];`;

  exampleCode3: string = `const r = parseInt(hex.slice(1, 3), 16) / 255;
const g = parseInt(hex.slice(3, 5), 16) / 255;
const b = parseInt(hex.slice(5, 7), 16) / 255;`;

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
