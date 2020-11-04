import { KeyframeConfig, KeyframeFormats } from "helpers/crawLineAnimation";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchArticleAction } from "store/CrawlLine/Slice";

interface Props {
  term: string;
}

export const CrawlLine = ({ term }: Props) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  // Сохраним обьект анимации в в хуке, для его сохранности
  const animation = useRef<Animation>();

  useEffect(() => {
    const el = ref.current;
    // Создаем анимацию (начальная анимация движения)
    animation.current = el?.animate(KeyframeFormats, KeyframeConfig);
  }, [ref]);

  const onMouseEnter = () => {
    // При наведение мыши остановить
    animation.current?.pause();
  };
  const onMouseLeave = () => {
    // При отводе мыши продолжить
    animation.current?.play();
  };
  const onClick = useCallback(() => {
    // Сделать запрос к беку редита
    dispatch(fetchArticleAction(term));
  }, [dispatch, term]);
  return (
    <div
      ref={ref}
      className="crawlLine"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {term}
    </div>
  );
};
