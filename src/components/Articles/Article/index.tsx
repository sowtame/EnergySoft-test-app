import React, { useCallback } from 'react';
import { IArticle } from 'store/CrawlLine/Model';
import { ReactComponent as Like } from 'assets/svg/like.svg';
import { ReactComponent as Trash } from 'assets/svg/trash.svg';
import { useDispatch } from 'react-redux';
import { likeArticleAction, removeArticleAction } from 'store/CrawlLine/Slice';

interface Props {
  article: IArticle;
}

export const Article = ({ article: { url, title, id, isLiked } }: Props) => {
  const dispatch = useDispatch();

  const onLike = useCallback(() => {
    dispatch(likeArticleAction(id));
  }, [dispatch]);

  const onRemove = useCallback(() => {
    dispatch(removeArticleAction(id));
  }, [dispatch]);

  return (
    <div className='article'>
      <Like onClick={onLike} className={`like_svg ${isLiked ? 'active' : ''}`} />
      <Trash onClick={onRemove} />
      <a href={url} className='link' target='blank' key={id}>
        {title}
      </a>
    </div>
  );
};
