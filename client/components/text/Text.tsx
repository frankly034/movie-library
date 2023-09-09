"use client";

import styled from "styled-components";

const Size = {
  large: "48px",
  medium: "24px",
  normal: "16px",
  small: "14px",
};

interface TextProps {
  readonly color?: string;
  readonly size?: keyof typeof Size;
  readonly margin?: string;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.color || "#f9f9f9"};
  font-size: ${(props) => props.size || Size.normal};
  ${(props) => props.margin && `margin: ${props.margin}`};
  line-height: 1.6;
`;

export default Text;
