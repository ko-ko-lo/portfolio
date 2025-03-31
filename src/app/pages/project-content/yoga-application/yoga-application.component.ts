import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { DividerComponent } from '../../../components/divider/divider.component';

@Component({
  selector: 'app-yoga-application',
  standalone: true,
  imports: [
    RouterModule,
    DividerComponent,
    CodeGoodBadComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './yoga-application.component.html',
  styleUrl: './yoga-application.component.scss',
})
export class YogaApplicationComponent {
  linkBreadcrumb: string = '/projects/open-stillness-application';
  linkTextBreadcrumb: string = 'Open Stillness Project Overview';

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
