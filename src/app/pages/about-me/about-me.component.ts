import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact.component';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule, IntroComponent, ContactComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  title: string = 'From Craft to Code: My Creative Journey';
  text: string =
    'This section tells the story of how I evolved, step-by-step, through Art, Design and Software Development.';
}
