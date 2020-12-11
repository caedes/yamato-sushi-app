import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { basket } from "../basket/reducers";
import { sushis } from "../sushis/reducers";

export default createStore(
  combineReducers({ basket, sushis }),
  devToolsEnhancer()
);
