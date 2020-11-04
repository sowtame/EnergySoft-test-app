import { KeyframeConfig, KeyframeFormats } from "helpers/crawLineAnimation";
import React, { useEffect, useRef } from "react";

interface Props {
  term: string;
}

export const CrawlLine = ({ term }: Props) => {
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
  return (
    <div
      ref={ref}
      className="crawlLine"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {term}
    </div>
  );
};
