import { Component } from '@angular/core';
import { ArticlePortfolioComponent } from '../article-portfolio/article-portfolio.component';
import { ArticlePortfolio } from '../models/articleportfolio.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  listedArticles: ArticlePortfolio[] = this.articleService.getArticles();
  listAsRows: ArticlePortfolio[][] = [];

  constructor(private articleService: ArticlesService) {
    this.organizeItemsIntoRows();
  }

  organizeItemsIntoRows() {
    let itemsToAdd = 2; // Start with 2 items for the first row
    for (let i = 0; i < this.listedArticles.length; i += itemsToAdd) {
      // Slice the next 2 or 3 items and add as a new row
      this.listAsRows.push(this.listedArticles.slice(i, i + itemsToAdd));
      // Alternate between adding 2 and 3 items
      itemsToAdd = itemsToAdd === 2 ? 3 : 2;
    }
  }
}
