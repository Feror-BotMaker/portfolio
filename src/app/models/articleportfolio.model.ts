export class ArticlePortfolio {
  titre: string;
  imagesrc: string;
  description: string;
  lien: string;
  constructor(
    titre: string,
    imagesrc: string,
    description: string,
    lien: string
  ) {
    this.titre = titre;
    this.imagesrc = imagesrc;
    this.description = description;
    this.lien = lien;
  }
}
