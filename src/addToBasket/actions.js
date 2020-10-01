export const ADD_TO_BASKET = "ADD_TO_BASKET";

export function addToBasket(sushiId, count = 1) {
  return {
    type: ADD_TO_BASKET,
    payload: { sushiId, count },
  };
}
