"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ref, forwardRef } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

interface SearchInputProps extends React.HTMLProps<HTMLInputElement> {
  onSearch: (search: string) => void;
  forwardRef?: Ref<HTMLInputElement>;
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

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const { forwardRef, name, onSearch, placeholder, value } = props;

    const debounced = useDebouncedCallback((value) => {
      onSearch(value);
    }, 1000);

    return (
      <Container>
        <FontAwesomeIcon icon={faSearch} />
        <Input
          ref={forwardRef || ref}
          role="search-input"
          name={name}
          onChange={(e) => debounced(e.target.value)}
          placeholder={placeholder}
        />
      </Container>
    );
  }
);

export default SearchInput;
