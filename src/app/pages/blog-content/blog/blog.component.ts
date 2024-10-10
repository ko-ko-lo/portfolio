import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, IntroComponent, BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  title: string = 'Reflecting on the Process';
  text: string =
    "Welcome to my Blog, a space where I explore the intersection of Design, Development, and Creativity. Here, I share not only the technical knowledge I've gained through my work in UX/UI Design and Development, but also the lessons I've learned along the way.";
}
