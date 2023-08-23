"use client";

import styled from "styled-components";

interface TagProps {
  onClick: () => void;
}

const Tag = styled.button<TagProps>`
  font-size: 14px;
  color: #fff;
  background-color: #202020;
  border: solid 1px #6c6c6c;
  border-radius: 4px;
  padding: 2px 8px;
  white-space: nowrap;

  transition: all;
  transition-duration: 0.5s;
  transition-delay: 0.1s;

  &:hover {
    border-color: #ffbf00;
    color: #ffbf00;
    cursor: pointer;
  }
`;

export default Tag;
