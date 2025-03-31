import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbBlogComponent {
  @Input() linkTextBreadcrumb: string = 'Blog Overview';
  @Input() linkBreadcrumb: string = '/blog';
}
