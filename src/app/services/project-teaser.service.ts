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
      image: 'projects/hexify-teaser.jpg',
      link: 'figma-plugin-hexify',
      absoluteLink: 'projects/figma-plugin-hexify',
    },
    {
      id: 2,
      title: 'JSONify Plugin: Export Text into Structured JSON Data',
      image: 'projects/jsonify.jpg',
      link: 'figma-plugin-jsonify',
      absoluteLink: 'projects/figma-plugin-jsonify',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
