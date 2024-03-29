import { Component, Input } from '@angular/core';
import { ArticlePortfolio } from '../models/articleportfolio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-portfolio',
  templateUrl: './article-portfolio.component.html',
  styleUrl: './article-portfolio.component.scss',
})
export class ArticlePortfolioComponent {
  @Input() article!: ArticlePortfolio;
  isClicked: boolean = false;

  constructor(private router: Router) {}

  navigate() {
    this.isClicked = true;
    setTimeout(() => {
      this.router.navigate([this.article.lien]);
    }, 500);
  }
}
