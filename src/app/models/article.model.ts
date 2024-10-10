// article.model.ts
export interface Article {
  id: number;
  title: string;
  teaser: string;
  image: string;
  link: string;
  absoluteLink?: string;
}
