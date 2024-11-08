import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { OverviewCardData } from '../../models/card.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ContactComponent, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articles: OverviewCardData[];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  get firstThreeArticles(): OverviewCardData[] {
    return this.articles.slice(0, 3);
  }
}
