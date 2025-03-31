import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { DividerComponent } from '../../../components/divider/divider.component';

@Component({
  selector: 'app-open-stillness-phase2',
  standalone: true,
  imports: [DividerComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './open-stillness-phase2.component.html',
  styleUrl: './open-stillness-phase2.component.scss',
})
export class OpenStillnessPhase2Component {
  linkBreadcrumb: string = '/projects/open-stillness-application';
  linkTextBreadcrumb: string = 'Open Stillness Project Overview';

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
