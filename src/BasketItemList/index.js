import { connect } from "react-redux";

import BasketItemList from "./component";
import { basketItems } from "../basket/selectors";

const mapStateToProps = (state) => ({
  sushis: basketItems(state.basket, state.sushis),
});

export default connect(mapStateToProps)(BasketItemList);
