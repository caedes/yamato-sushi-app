import { connect } from "react-redux";

import Header from "./component";
import { basketCount } from "../basket/selectors";

const mapStateToProps = (state) => ({
  basketCount: basketCount(state.basket),
});

export default connect(mapStateToProps)(Header);
