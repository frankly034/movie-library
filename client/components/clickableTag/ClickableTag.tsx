"use client";

import styled from "styled-components";

interface TagProps {
  onClick: () => void;
}

const Tag = styled.button<TagProps>`
  font-size: 14px;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.panelBackground};
  border: solid 1px ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  padding: 2px 8px;
  white-space: nowrap;

  transition: all;
  transition-duration: ${({ theme }) => theme.variables.transitionDuration};
  transition-delay: ${({ theme }) => theme.variables.transitionDelay};

  &:hover {
    border-color: ${({ theme }) => theme.colors.goldenYellow};
    color: ${({ theme }) => theme.colors.goldenYellow};
    cursor: pointer;
  }
`;

export default Tag;
