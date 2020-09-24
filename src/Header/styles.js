import styled from "styled-components";

export const Logo = styled.img`
  width: 140px;
  height: 140px;
`;

const headerHeight = 140;

export const Title = styled.h1`
  display: inline-block;
  margin: 50px 0 0 20px;
  vertical-align: top;
`;

export const Wrapper = styled.header`
  height: ${headerHeight}px;
  border-bottom: 1px solid grey;
`;

export const Badge = styled.span`
  position: absolute;
  right: 20px;
  top: 40px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #eb5926;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;
