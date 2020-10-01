import { ADD_TO_BASKET } from "./actions";

const initialState = {
  basket: [],
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return Object.assign({}, state, {
        basket: [...state.basket, action.payload],
      });

    default:
      return state;
  }
}
