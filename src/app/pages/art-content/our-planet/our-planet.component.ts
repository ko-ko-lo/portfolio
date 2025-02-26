import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { QuoteComponent } from '../../../components/quote/quote.component';

@Component({
  selector: 'app-our-planet',
  standalone: true,
  imports: [RouterModule, IntroComponent, QuoteComponent, DividerComponent],
  templateUrl: './our-planet.component.html',
  styleUrl: './our-planet.component.scss',
})
export class OurPlanetComponent {
  title: string = 'Protecting Our Planet: A Journey Back to Nature';
  text: string[] = [
    'Nature is more than just a backdrop to our lives - it is a source of comfort, peace, and renewal. From the vast oceans that are our shared home to the forests that shelter countless species, nature gives us life in so many ways. The forests, with their soil that filters water and their importance in maintaining balance in the climate, are a reminder of how deeply intertwined we are with the natural world.',
    'As the seasons change and spring arrives, I feel nature awakening around me. The air smells different, the light shifts, and everything becomes more vibrant. I close my eyes, feeling the sun on my face, and I am reminded of the simple joy and peace that nature offers.',
  ];
}
