// Ключи анимации

export const getKeyframeFormats = (width: number) => [
  {
    transform: 'translateX(0)',
    easing: 'ease-in-out',
  },
  {
    // Ширина экрана - отступы
    transform: `translateX(calc(${width - 550}px))`,
    easing: 'ease-in-out',
  },
  {
    transform: 'translateX(0)',
  },
];

// Настройки анимации
export const KeyframeConfig: KeyframeAnimationOptions = {
  duration: 6000,
  iterations: Infinity,
  fill: 'both',
};
