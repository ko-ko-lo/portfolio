import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-pattern-hearts',
  standalone: true,
  imports: [RouterModule, DividerComponent, IntroComponent],
  templateUrl: './pattern-hearts.component.html',
  styleUrl: './pattern-hearts.component.scss',
})
export class PatternHeartsComponent {
  title: string = 'Love Comes in All Patterns – A Fun Figma Plugin';
  text: string[] = [
    'This plugin brings a collection of crafted, patterned hearts to Figma designs - perfect for adding warmth, charm, and creativity. Whether used to celebrate, connect, or simply bring warmth to a design, the hearts are a playful tool with an underlying message: love comes in all patterns.',
  ];

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
