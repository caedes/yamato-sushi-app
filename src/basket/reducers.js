import { ADD_TO_BASKET } from "./actions";

const initialState = [];

export function basket(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { sushiId, count } = action.payload;

      let basket;
      const itemIndex = state.findIndex((item) => item.sushiId === sushiId);
      if (itemIndex === -1) {
        basket = [...state, { sushiId, count }];
      } else {
        basket = [...state];
        basket[itemIndex].count += count;
      }

      return basket;

    default:
      return state;
  }
}
