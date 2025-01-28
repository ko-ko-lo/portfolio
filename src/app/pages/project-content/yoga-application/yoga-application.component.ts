import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../../components/intro/intro.component';

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
    'This project combines the principles of yoga with thoughtful design and technology to create a space for growth, learning, and self-reflection. Inspired by years of yoga practice and teacher training, it is designed to share the transformative benefits of yoga and provide others with tools to explore, heal, and grow.',
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
