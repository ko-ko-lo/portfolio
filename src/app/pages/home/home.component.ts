import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ContactComponent, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  get firstThreeArticles(): Article[] {
    return this.articles.slice(0, 3);
  }
}
