// Ключи анимации
export const KeyframeFormats = [
  {
    transform: "translateX(0)",
    easing: "ease-in-out",
  },
  {
    transform: `translateX(calc(${window.innerWidth - 550}px))`,
    easing: "ease-in-out",
  },
  {
    transform: "translateX(0)",
  },
];

// Настройки анимации
export const KeyframeConfig: KeyframeAnimationOptions = {
  duration: 4000,
  iterations: Infinity,
  fill: "both",
};
