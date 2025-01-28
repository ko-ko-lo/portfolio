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
        'Tired of manually transferring Color Collections from Figma to SCSS, I created Hexify to streamline the process. It extracts color variables from Figma and converts them into hex values, generating SCSS, CSS, or JSON files to save time and simplify the design-to-code workflow.',
      image: 'projects/hexify-teaser.jpg',
      link: 'figma-plugin-hexify',
      absoluteLink: 'projects/figma-plugin-hexify',
    },
    {
      id: 2,
      title: 'JSONify Plugin: Export Text into Structured JSON Data',
      teaser:
        'While building my yoga web application, I found myself frustrated with manually copying text from Figma. To make things easier, I developed JSONify—a plugin that exports text content directly from selected Figma layers into a clean, structured JSON file.',
      image: 'projects/jsonify.jpg',
      link: 'figma-plugin-jsonify',
      absoluteLink: 'projects/figma-plugin-jsonify',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
