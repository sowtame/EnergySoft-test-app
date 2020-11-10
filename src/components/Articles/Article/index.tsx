import React from 'react';
import { IArticle } from 'store/CrawlLine/Model';
import { ReactComponent as Like } from 'assets/svg/like.svg';
import { ReactComponent as Trash } from 'assets/svg/trash.svg';
import { useDispatch } from 'react-redux';
import { likeArticleAction, removeArticleAction } from 'store/CrawlLine/Slice';

interface Props {
  article: IArticle;
  style: React.CSSProperties;
}

export const Article = ({ article: { url, title, id, isLiked }, style }: Props) => {
  const dispatch = useDispatch();

  const onLike = () => dispatch(likeArticleAction(id));
  const onRemove = () => dispatch(removeArticleAction(id));

  return (
    <div className='article' style={style}>
      <div className='action-btns'>
        <Like onClick={onLike} className={`like_svg ${isLiked ? 'active' : ''}`} />
        <Trash onClick={onRemove} />
      </div>
      <a href={url} className='link' target='blank' key={id}>
        {title}
      </a>
    </div>
  );
};
