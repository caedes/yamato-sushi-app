import styled from "styled-components";

export const OrangeButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #f9eca0;
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #e65f44;
  display: inline-block;
  cursor: pointer;
  color: ${({ secondary }) => (secondary ? "blue" : "#c92200")};
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;

  &:hover {
    background: linear-gradient(to bottom, #f2ab1e 5%, #f0c911 100%);
    background-color: #f2ab1e;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
