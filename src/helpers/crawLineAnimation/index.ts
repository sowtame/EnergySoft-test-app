// Ключи анимации
export const KeyframeFormats = [
  {
    transform: "translateX(0)",
  },
  {
    transform: `translateX(calc(${window.innerWidth - 550}px))`,
  },
  {
    transform: "translateX(0)",
  },
];

// Настройки анимации
export const KeyframeConfig = {
  duration: 4000,
  iterations: Infinity,
};
