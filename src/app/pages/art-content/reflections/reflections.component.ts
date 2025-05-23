import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentReflectionsComponent } from '../../../components/content-reflections/content-reflections.component';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { QuoteComponent } from '../../../components/quote/quote.component';

@Component({
  selector: 'app-reflections',
  standalone: true,
  imports: [
    RouterModule,
    IntroComponent,
    ContentReflectionsComponent,
    DividerComponent,
    QuoteComponent,
  ],
  templateUrl: './reflections.component.html',
  styleUrl: './reflections.component.scss',
})
export class ReflectionsComponent {
  title: string = 'Reflections in Black and White';
  text: string[] = [
    'This collection is not only an expression of my personal experience but also an invitation for others to explore their own inner worlds, to find beauty in their challenges and to embrace both the light and the dark that make us who we are.',
  ];

  quote =
    "I guess I'm pretty much of a lone wolf. I don't say I don't like people at all, but, to tell you the truth, I only like it then if I have a chance to look deep into their hearts and their minds.";
  author = 'Bela Lugosi';
}
