import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { basketReducer } from "../addToBasket/reducers";

export default createStore(basketReducer, devToolsEnhancer());
