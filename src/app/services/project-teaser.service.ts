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
      image: 'projects/hexify-teaser.webp',
      link: 'figma-plugin-hexify',
      absoluteLink: 'projects/figma-plugin-hexify',
    },
    {
      id: 2,
      title: 'JSONify Plugin: Export Text into Structured JSON Data',
      image: 'projects/jsonify.webp',
      link: 'figma-plugin-jsonify',
      absoluteLink: 'projects/figma-plugin-jsonify',
    },
    {
      id: 3,
      title: 'Love Comes in All Patterns: A Fun Figma Plugin',
      image: 'projects/pattern-hearts-cover.webp',
      link: 'figma-pattern-hearts',
      absoluteLink: 'projects/figma-pattern-hearts',
    },
    {
      id: 4,
      title: 'Curly Arrows: A Fun Figma Plugin',
      image: 'projects/curly-arrows-teaser.webp',
      link: 'figma-curly-arrows',
      absoluteLink: 'projects/figma-curly-arrows',
    },
    {
      id: 5,
      title: 'Smiley Express: Hop On and Pick a Mood!',
      image: 'projects/smiley-express-teaser.webp',
      link: 'figma-smiley-express',
      absoluteLink: 'projects/figma-smiley-express',
    },
  ];
  getProjectTeaser(): OverviewCardData[] {
    return this.projectTeaser;
  }
}
