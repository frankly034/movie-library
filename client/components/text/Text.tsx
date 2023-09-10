"use client";

import styled from "styled-components";

const Size = {
  large: "48px",
  medium: "24px",
  normal: "16px",
  small: "14px",
};

interface TextProps {
  $color?: string;
  $size?: keyof typeof Size;
  $margin?: string;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.$color || props.theme.palette.foregroundSecondary};
  font-size: ${(props) => props.$size || Size.normal};
  ${(props) => props.$margin && `margin: ${props.$margin}`};
  line-height: 1.6;
`;

export default Text;
