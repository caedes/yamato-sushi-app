import { connect } from "react-redux";

import SushiCardList from "./component";
import { initSushis } from "../sushis/actions";

const mapDispatchToProps = {
  initSushis,
};

export default connect(null, mapDispatchToProps)(SushiCardList);
