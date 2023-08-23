"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface SearchButtonProps {
  onClick: () => void;
}

const Container = styled.button<SearchButtonProps>`
  font-size: 16px;
  color: #fff;
  background-color: #202020;
  border: solid 1px #6c6c6c;
  border-radius: 4px;
  padding: 8px;

  transition: all;
  transition-duration: 0.5s;
  transition-delay: 0.1s;

  &:hover {
    transform: scale(1.05);
    background-color: #f9f9f9;
    color: #202020;
    cursor: pointer;
  }
`;

const SearchButton: FunctionComponent<SearchButtonProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <FontAwesomeIcon icon={faSearch} />
    </Container>
  );
};
export default SearchButton;
