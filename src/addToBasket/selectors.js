export const basketCount = (basket) =>
  basket.reduce((total, basketItem) => total + basketItem.count, 0);
