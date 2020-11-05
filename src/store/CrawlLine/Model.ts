import { randomInteger } from 'helpers/common';

export interface IArticle {
  id: number;
  title: string;
  url: string;
  isLiked: boolean;
}

export class ArticleModel implements IArticle {
  id: number;
  title: string;
  url: string;
  isLiked: boolean;

  constructor(params: any) {
    const randomArticleCnt = randomInteger(0, params.data.dist - 1);
    const randomArticle = params.data.children[randomArticleCnt].data;
    this.title = randomArticle.title;
    this.url = randomArticle.url;

    // Из за того, что мы берем рандомную статью, надо создать uuid (дата самый простой способ) )
    this.id = Date.now();

    // Изнеачальное состояние лайка (не прилетает с бека)
    this.isLiked = false;
  }
}
