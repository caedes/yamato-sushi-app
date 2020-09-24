import React from "react";
import { bool, func } from "prop-types";

import { OrangeButton } from "./styles";

export default function Button({ children, onClick, secondary }) {
  return (
    <OrangeButton secondary={secondary} onClick={onClick}>
      {children}
    </OrangeButton>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  secondary: bool,
};

Button.defaultProps = {
  secondary: false,
};
