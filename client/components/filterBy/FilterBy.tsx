"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

import Genre from "../../models/genre";
import { ClickableTagWithCloseIcon, Text } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type FilterByProps = {
  genres: Genre[];
  search?: string;
  onClickTag: () => void;
};

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const FilterBy: FunctionComponent<FilterByProps> = ({
  search,
  genres,
  onClickTag,
}) => {
  return (
    <Container>
      <Text margin="0 8px 0 0">Filter: </Text>
      {search && (
        <ClickableTagWithCloseIcon
          addonBefore={<FontAwesomeIcon icon={faSearch} />}
          onClick={onClickTag}
        >
          {search}
        </ClickableTagWithCloseIcon>
      )}
      {genres.map((genre) => (
        <ClickableTagWithCloseIcon onClick={onClickTag}>
          {genre.name}
        </ClickableTagWithCloseIcon>
      ))}
    </Container>
  );
};

export default FilterBy;
