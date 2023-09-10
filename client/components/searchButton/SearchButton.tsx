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
  color: ${({ theme }) => theme.palette.foreground};
  background-color: ${({ theme }) => theme.palette.panelBackground};
  border: solid 1px ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  padding: ${({ theme }) => theme.spacing.md};

  transition: all;
  transition-duration: ${({ theme }) => theme.variables.transitionDuration};
  transition-delay: ${({ theme }) => theme.variables.transitionDelay};

  &:hover {
    transform: scale(${({ theme }) => theme.variables.scale});
    background-color: ${({ theme }) => theme.palette.panelSecondaryBackground};
    color: ${({ theme }) => theme.palette.foregroundSecondaryContrast};
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
