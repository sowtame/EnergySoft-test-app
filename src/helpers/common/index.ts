// Bспользовать Math.floor для получения случайного числа от min до max+1:
export const randomInteger = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
