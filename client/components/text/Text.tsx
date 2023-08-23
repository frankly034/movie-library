"use client";

import styled from "styled-components";

interface TextProps {
  readonly textColor?: string;
  readonly size?: string;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.textColor || "#f9f9f9"};
  font-size: ${(props) => props.size || "14px"};
`;

export default Text;
