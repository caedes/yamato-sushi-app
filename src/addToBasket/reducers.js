import { ADD_TO_BASKET } from "./actions";

const initialState = {
  basket: [],
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { sushiId } = action.payload;

      return Object.assign({}, state, {
        basket: [...state.basket, { sushiId }],
      });

    default:
      return state;
  }
}
