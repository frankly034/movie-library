"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

interface SearchInputProps extends React.HTMLProps<HTMLInputElement> {
  onSearch: (search: string) => void;
}

const Input = styled.input`
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
  onSearch,
  placeholder,
}) => {
  const debounced = useDebouncedCallback((value) => {
    onSearch(value);
  }, 1000);

  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        role="search-input"
        name={name}
        onChange={(e) => debounced(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default SearchInput;
