export interface OverviewCardData {
  id: number;
  title: string;
  image: string;
  link: string;
  absoluteLink?: string;
  category?: 'utility' | 'creative';
}
