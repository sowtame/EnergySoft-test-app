import { KeyframeConfig, getKeyframeFormats } from 'helpers/crawLineAnimation';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticleAction } from 'store/CrawlLine/Slice';
import { useWindowSize } from 'utils/Hooks/useWindowSize';

interface Props {
  term: string;
}

export const CrawlLine = ({ term }: Props) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  // Сохраним обьект анимации в в хуке, для его сохранности
  const animation = useRef<Animation>();

  const { width } = useWindowSize();

  useEffect(() => {
    const el = ref.current;
    // Создаем анимацию (начальная анимация движения)
    animation.current = el?.animate(getKeyframeFormats(width), KeyframeConfig);
  }, [ref, width]);

  const onMouseEnter = () => {
    // При наведение мыши остановить
    animation.current?.pause();
  };
  const onMouseLeave = () => {
    // При отводе мыши продолжить
    animation.current?.play();
  };
  const onClick = () => {
    dispatch(fetchArticleAction(term));
  };
  return (
    <div ref={ref} className='crawlLine' onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {term}
    </div>
  );
};
