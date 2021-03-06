import { connect } from "react-redux";

import SushiCard from "./component";
import { addToBasket } from "../basket/actions";

const mapDispatchToProps = { addToBasket };

export default connect(null, mapDispatchToProps)(SushiCard);
