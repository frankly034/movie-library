"use client";

import styled from "styled-components";

type TitleProps = {
  textColor?: string;
  size?: string;
  margin?: string;
};

const Title = styled.h1<TitleProps>`
  color: ${(props) => props.textColor || "#f9f9f9"};
  font-size: ${(props) => props.size || "16px"};
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

export default Title;
