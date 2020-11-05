import { Article } from 'components/Articles/Article';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IArticle } from 'store/CrawlLine/Model';
import { selActicleLoading, selActicles } from 'store/CrawlLine/Selectors';
import { FixedSizeList as List } from 'react-window';
import { CustomScrollbarsVirtualList } from 'components/Articles/CustomScrollbars';

export const Articles = () => {
  const ref = useRef(null);
  const articles: IArticle[] = useSelector(selActicles);
  const isLoading: boolean = useSelector(selActicleLoading);

  return (
    <div className='acticles'>
      <List
        className='acticles_list'
        height={window.innerHeight / 2 - 100}
        itemCount={articles.length}
        itemSize={30}
        ref={ref}
        width={window.innerWidth - 400}
        outerElementType={CustomScrollbarsVirtualList}>
        {({ index, style }) => <Article article={articles[index]} style={style} />}
      </List>
      {isLoading && <div className='loader'>Загрузка...</div>}
    </div>
  );
};
