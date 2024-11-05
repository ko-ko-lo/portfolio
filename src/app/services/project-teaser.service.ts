import { Injectable } from '@angular/core';
import { OverviewCardData } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectTeaserService {
  private projectTeaser: OverviewCardData[] = [
    {
      id: 1,
      title: 'Hexify: Seamlessly Bring Figma Colors to Code',
      teaser:
        'Hexify was born out of a real need while working on the yoga application. After repeatedly transferring color collections manually from Figma to SCSS, I developed this plugin to streamline the process. Hexify extracts color variables directly from Figma collections, converting them into hex values and generating SCSS, CSS, or JSON files—all downloadable in a click. It’s designed to save time and enhance workflow, making it easier to bring creative designs into code.',
      image: 'projects/hexify-teaser.jpg',
      link: 'ux-design-guidelines',
      absoluteLink: '/blog/ux-design-guidelines',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
