import { Injectable } from '@angular/core';
import { OverviewCardData } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: OverviewCardData[] = [
    {
      id: 3,
      title: '7 UX Design Guidelines to Keep in Mind',
      teaser:
        'This article explores 7 essential UX Design Guidelines that can help you create meaningful user experiences.',
      image: 'blog/teaser-ux-guidelines.jpg',
      link: 'ux-design-guidelines',
      absoluteLink: '/blog/ux-guidelines',
    },
    {
      id: 2,
      title: 'Usability Testing Made Easy in 4 Steps',
      teaser:
        'This article breaks down the process into four clear steps, helping you gather valuable insights to improve your product.',
      image: 'blog/teaser-usability.png',
      link: 'usability-testing',
      absoluteLink: '/blog/usability-testing',
    },
    {
      id: 1,
      title: 'Best Use of Quantitative & Qualitative Research',
      teaser:
        'This article explores how each approach contributes and offers valuable insights for creating successful solutions.',
      image: 'blog/teaser-research.png',
      link: 'quantitative-qualitative-research',
      absoluteLink: '/blog/quantitative-qualitative-research',
    },
  ];

  getArticles(): OverviewCardData[] {
    return this.articles;
  }
}
