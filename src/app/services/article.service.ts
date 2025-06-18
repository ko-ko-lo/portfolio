import { Injectable } from '@angular/core';
import { OverviewCardData } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: OverviewCardData[] = [
    {
      id: 6,
      title: 'My Design Process: A Practical Guide Shaped by Experience',
      image: 'blog/design-process-teaser.png',
      link: 'design-process',
      absoluteLink: '/blog/design-process',
    },
    {
      id: 5,
      title: 'My Styling Story: From CSS to Tailwind',
      image: 'blog/teaser-tailwind.png',
      link: 'styling-story',
      absoluteLink: '/blog/styling-story',
    },
    {
      id: 4,
      title:
        '5 Accessibility Mistakes I Made (and Fixed) While Building an Angular App',
      image: 'blog/teaser-a11y-robot.png',
      link: 'angular-accessibility',
      absoluteLink: '/blog/angular-accessibility',
    },
    {
      id: 3,
      title: '7 UX Design Guidelines to Keep in Mind',
      image: 'blog/teaser-ux-guidelines.png',
      link: 'ux-design-guidelines',
      absoluteLink: '/blog/ux-guidelines',
    },
    {
      id: 2,
      title: 'Usability Testing Made Easy - in 4 Steps',
      image: 'blog/teaser-usability.png',
      link: 'usability-testing',
      absoluteLink: '/blog/usability-testing',
    },
    {
      id: 1,
      title: 'Best Use of Quantitative & Qualitative Research',
      image: 'blog/teaser-research.png',
      link: 'quantitative-qualitative-research',
      absoluteLink: '/blog/quantitative-qualitative-research',
    },
  ];

  getArticles(): OverviewCardData[] {
    return this.articles;
  }
}
