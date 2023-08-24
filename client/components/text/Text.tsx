"use client";

import styled from "styled-components";

interface TextProps {
  readonly color?: string;
  readonly size?: string;
  readonly margin?: string;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.color || "#f9f9f9"};
  font-size: ${(props) => props.size || "14px"};
  ${(props) => props.margin && `margin: ${props.margin}`};
  line-height: 1.6;
`;

export default Text;
