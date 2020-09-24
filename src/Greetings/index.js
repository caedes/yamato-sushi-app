import React from "react";
import { string } from "prop-types";

import fullname from "../fullname";

export default function Greetings({ firstname, surname }) {
  return <p>Hello {fullname({ firstname, surname })}</p>;
}

Greetings.propTypes = {
  firstname: string.isRequired,
  surname: string,
};

Greetings.defaultProps = {
  surname: "Martin",
};
