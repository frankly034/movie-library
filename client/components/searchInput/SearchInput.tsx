"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface SearchInputProps {
  name?: string;
  onChange: () => void;
  placeholderText?: string;
}

const Input = styled.input<SearchInputProps>`
  all: unset;
  width: 100%;
  padding: 4px;
  font-size: 24px;
  padding-left: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #f9f9f9;
`;

const SearchInput: FunctionComponent<SearchInputProps> = ({
  name,
  onChange,
  placeholderText,
}) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        role="search-input"
        name={name}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </Container>
  );
};

export default SearchInput;
