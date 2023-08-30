"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styled from "styled-components";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  forwardRef?: Ref<HTMLInputElement>;
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

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const { forwardRef, name, onChange, placeholder, value } = props;
    return (
      <Container>
        <FontAwesomeIcon icon={faSearch} />
        <Input
          ref={forwardRef || ref}
          role="search-input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </Container>
    );
  }
);

export default SearchInput;
