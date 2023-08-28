"use client";

import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { CustomLink, Text } from "..";

interface MovieNavigationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Icon = styled(FontAwesomeIcon)`
  color: #f9f9f9;
  font-size: 36px;

  &:hover {
    color: #ffbf00;
  }
`;

const Container = styled.div`
  position: sticky;
  background-color: transparent;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MovieNavigation: FunctionComponent<MovieNavigationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <Container>
      <Row>
        <CustomLink href="#" onClick={onPreviousPage}>
          {currentPage > 1 && <Icon icon={faSquareCaretLeft} />}
        </CustomLink>
        <Text color="#ffbf00">{`${currentPage} of ${totalPages}`}</Text>
        <CustomLink href="#" onClick={onNextPage}>
          {currentPage < totalPages && <Icon icon={faSquareCaretRight} />}
        </CustomLink>
      </Row>
    </Container>
  );
};

export default MovieNavigation;
