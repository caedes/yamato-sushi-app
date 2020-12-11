export const basketCount = (basket) =>
  basket.reduce((total, basketItem) => total + basketItem.count, 0);

export const basketItems = (basket, sushis) =>
  basket.map(({ sushiId, count }) => ({
    sushiId,
    count,
    title: sushis.find((sushi) => sushi.id === sushiId).title,
  }));
