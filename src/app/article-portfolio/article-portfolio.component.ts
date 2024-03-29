import { Component, Input } from '@angular/core';
import { ArticlePortfolio } from '../models/articleportfolio.model';

@Component({
  selector: 'app-article-portfolio',
  templateUrl: './article-portfolio.component.html',
  styleUrl: './article-portfolio.component.scss',
})
export class ArticlePortfolioComponent {
  @Input() article!: ArticlePortfolio;
}
