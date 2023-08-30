"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

import Genre from "../../models/genre";
import { ClickableTagWithCloseIcon, Text } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type FilterByProps = {
  genres?: Genre[];
  search?: string;
  onClickTag: (genre: Genre) => void;
  onClearSearch: () => void;
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px 0 8px;
`;

const FilterBy: FunctionComponent<FilterByProps> = ({
  search,
  genres = [],
  onClickTag,
  onClearSearch,
}) => {
  return (
    <Container>
      <Text $margin="0 8px 0 0">Filter: </Text>
      {search && (
        <ClickableTagWithCloseIcon
          addonBefore={<FontAwesomeIcon icon={faSearch} />}
          onClick={onClearSearch}
        >
          {search}
        </ClickableTagWithCloseIcon>
      )}
      {genres?.map((genre) => (
        <ClickableTagWithCloseIcon onClick={() => onClickTag(genre)}>
          {genre.name}
        </ClickableTagWithCloseIcon>
      ))}
    </Container>
  );
};

export default FilterBy;
