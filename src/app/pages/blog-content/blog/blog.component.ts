import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, IntroComponent, BlogCardComponent, DividerComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  title: string = 'Beyond Code: Thoughts on Design & Development';
  text: string =
    'Welcome to my blog - a space where design, development, and creativity come together. Here, I share not just technical insights from my work in UX/UI design and development, but also the lessons, challenges, and inspirations that shape my journey.';
}
