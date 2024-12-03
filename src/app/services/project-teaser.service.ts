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
    {
      id: 2,
      title: 'JSONify Plugin: Export Text into Structured JSON Data',
      teaser:
        'While working on my yoga web application, I got tired of manually copying text from Figma. So I created a plugin to simplify the process. JSONify exports text content directly from selected Figma layers into a structured JSON file.',
      image: 'projects/jsonify.jpg',
      link: 'figma-plugin-jsonify',
      absoluteLink: 'projects/figma-plugin-jsonify',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
