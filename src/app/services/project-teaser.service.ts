import { Injectable } from '@angular/core';
import { OverviewCardData } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectTeaserService {
  private projectTeaser: OverviewCardData[] = [
    {
      id: 1,
      title: 'Hexify Plugin: Seamlessly Bring Figma Colors to Code',
      teaser:
        'After repeatedly transferring color collections manually from Figma to SCSS, I developed this plugin to streamline the process. Hexify extracts color variables directly from Figma collections, converting them into hex values and generating SCSS, CSS, or JSON files.',
      image: 'projects/hexify-teaser.jpg',
      link: 'figma-plugin-hexify',
      absoluteLink: 'projects/figma-plugin-hexify',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
