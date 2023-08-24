"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

import { Title } from "..";
import SearchButton from "../searchButton/SearchButton";

interface HeadingProps {
  showFilter: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2c2c2c;
  padding-bottom: 8px;
`;

const Heading: FunctionComponent<HeadingProps> = ({ showFilter }) => {
  return (
    <Container>
      <Title size="32px">EML</Title>
      <SearchButton onClick={showFilter} />
    </Container>
  );
};

export default Heading;
