import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { DividerComponent } from '../../../components/divider/divider.component';

@Component({
  selector: 'app-yoga-application',
  standalone: true,
  imports: [RouterModule, DividerComponent, CodeGoodBadComponent],
  templateUrl: './yoga-application.component.html',
  styleUrl: './yoga-application.component.scss',
})
export class YogaApplicationComponent {
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
