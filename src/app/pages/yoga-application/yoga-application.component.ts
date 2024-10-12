import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-yoga-application',
  standalone: true,
  imports: [RouterModule, IntroComponent],
  templateUrl: './yoga-application.component.html',
  styleUrl: './yoga-application.component.scss',
})
export class YogaApplicationComponent {
  title: string = 'Bringing Yoga to Life: My Heart Project';
  text: string[] = [
    'This project represents the culmination of my personal journey through Yoga, Art, Design and Development - a heart project that allowed me to bring together all the things I love most. Having practiced yoga for many years and completed both Traditional and Yin Yoga Teacher Trainings, I found that yoga provided not only physical benefits but also a space for self-reflection, healing, and growth. I wanted to create something that reflected my passion for yoga while also leveraging my skills in UX/UI Design, Illustration and Software Development.',
    'The Yin-Style Yoga Application is the result of that desire - a space where users can explore and learn about Yin-Style Yoga.',
  ];

  codeSnippet: string = `
export class LibraryComponent implements OnInit {
  yogaPoses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/yoga-poses.json').subscribe(data => {
      this.yogaPoses = data;
    });
  }
}`;
  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
