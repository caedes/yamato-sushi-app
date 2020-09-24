import React from "react";
import { string } from "prop-types";

import yamotoLogo from "./yamoto-logo.jpg";
import { Badge, Wrapper, Logo, Title } from "./styles";

const websiteTitle = "Yamoto Sushi";

export default function Header({ title }) {
  return (
    <Wrapper>
      <Logo src={yamotoLogo} alt={websiteTitle} />
      <Title>
        {websiteTitle} - {title}
      </Title>
      <Badge>3</Badge>
    </Wrapper>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
