import React, { useCallback, useRef } from 'react';
import { IArticle } from 'store/CrawlLine/Model';
import { ReactComponent as Like } from 'assets/svg/like.svg';
import { ReactComponent as Trash } from 'assets/svg/trash.svg';
import { useDispatch } from 'react-redux';
import { likeArticleAction, removeArticleAction } from 'store/CrawlLine/Slice';

export interface IShifts {
  shiftX: number;
  shiftY: number;
}
interface Props {
  article: IArticle;
  style?: React.CSSProperties;
}

export const Article = ({ article: { url, title, id, isLiked }, style }: Props) => {
  const dispatch = useDispatch();

  // Это удобно для хранения любых изменяемых значений
  const shift = useRef<IShifts | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const onLike = useCallback(() => {
    dispatch(likeArticleAction(id));
  }, [dispatch]);

  const onRemove = useCallback(() => {
    dispatch(removeArticleAction(id));
  }, [dispatch]);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      shift.current = {
        shiftX: e.clientX - el.getBoundingClientRect().left,
        shiftY: e.clientY - el.getBoundingClientRect().top,
      };
    }
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el && shift.current) {
      el.style.position = 'fixed';

      el.style.left = `${e.pageX - shift.current.shiftX}px`;
      el.style.top = `${e.pageY - shift.current.shiftY}px`;
    }
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el && shift.current) {
      el.style.left = `${e.pageX - shift.current.shiftX}px`;
      el.style.top = `${e.pageY - shift.current.shiftY}px`;
    }
  };

  return (
    <div
      className='article'
      draggable
      ref={ref}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      style={style}>
      <Like onClick={onLike} className={`like_svg ${isLiked ? 'active' : ''}`} />
      <Trash onClick={onRemove} />
      <a href={url} className='link' target='blank' key={id}>
        {title}
      </a>
    </div>
  );
};
