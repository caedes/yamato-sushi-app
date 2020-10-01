import { ADD_TO_BASKET } from "./actions";

const initialState = {
  basket: [],
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { sushiId, count } = action.payload;

      let basket;
      const itemIndex = state.basket.findIndex(
        (item) => item.sushiId === sushiId
      );
      if (itemIndex === -1) {
        basket = [...state.basket, { sushiId, count }];
      } else {
        basket = [...state.basket];
        basket[itemIndex].count += count;
      }

      return Object.assign({}, state, {
        basket,
      });

    default:
      return state;
  }
}
