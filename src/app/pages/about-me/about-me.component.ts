import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { ListComponent } from '../../components/list/list.component';
import { MyQuoteComponent } from '../../components/my-quote/my-quote.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    RouterModule,
    ContactComponent,
    IntroComponent,
    DividerComponent,
    ListComponent,
    MyQuoteComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  title: string = 'How I Found My Place in Tech & More';
  text: string =
    'I started my journey in design, driven by a curiosity to understand how things are made. That same mindset led me to software development, where I found the perfect mix of creativity, logic, and problem-solving. Now, I combine design and code to craft intuitive, meaningful digital experiences.';

  myQuote: string =
    'The road ahead for me is about continuing to merge creativity and code, learning new skills, and creating products that bring ideas to life in ways that feel meaningful and impactful.';

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
