import { Article } from 'components/Articles/Article';
import React from 'react';
import { useSelector } from 'react-redux';
import { IArticle } from 'store/CrawlLine/Model';
import { selActicleLoading, selActicles } from 'store/CrawlLine/Selectors';

export const Articles = () => {
  const articles: IArticle[] = useSelector(selActicles);
  const isLoading: boolean = useSelector(selActicleLoading);

  return (
    <div className='acticles'>
      {articles.map((article) => (
        <Article article={article} />
      ))}
      {isLoading && <div className='loader'>Загрузка...</div>}
    </div>
  );
};
