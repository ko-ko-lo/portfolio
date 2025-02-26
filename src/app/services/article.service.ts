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
      image: 'blog/teaser-ux-guidelines.jpg',
      link: 'ux-design-guidelines',
      absoluteLink: '/blog/ux-guidelines',
    },
    {
      id: 2,
      title: 'Usability Testing Made Easy in 4 Steps',
      image: 'blog/teaser-usability.jpg',
      link: 'usability-testing',
      absoluteLink: '/blog/usability-testing',
    },
    {
      id: 1,
      title: 'Best Use of Quantitative & Qualitative Research',
      image: 'blog/research.png',
      link: 'quantitative-qualitative-research',
      absoluteLink: '/blog/quantitative-qualitative-research',
    },
  ];

  getArticles(): OverviewCardData[] {
    return this.articles;
  }
}
