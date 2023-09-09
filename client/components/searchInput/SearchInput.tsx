"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface SearchInputProps {
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText?: string;
  value: string;
}

const Input = styled.input<SearchInputProps>`
  all: unset;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: 24px;
  padding-left: ${({ theme }) => theme.spacing.md};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.foregroundSecondary};
`;

const SearchInput: FunctionComponent<SearchInputProps> = ({
  name,
  onChange,
  placeholderText,
  value,
}) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        role="search-input"
        name={name}
        onChange={onChange}
        placeholder={placeholderText}
        value={value}
      />
    </Container>
  );
};

export default SearchInput;
