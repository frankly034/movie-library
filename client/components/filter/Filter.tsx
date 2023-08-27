"use client";

import Genre from "@/models/genre";
import { FunctionComponent } from "react";
import styled from "styled-components";

import { ClickableTag, SearchInput } from "..";

type FilterProps = {
  genres?: Genre[];
  onTagClick: (tag: Genre) => void;
  onSearch: (search: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  overflow-y: scroll;
`;

const Filter: FunctionComponent<FilterProps> = ({
  genres = [],
  onSearch,
  onTagClick,
}) => {
  return (
    <Container>
      <TagsContainer>
        {genres.map((genre) => (
          <ClickableTag key={genre.tmbdId} onClick={() => onTagClick(genre)}>
            {genre.name}
          </ClickableTag>
        ))}
      </TagsContainer>
      <SearchInput onSearch={onSearch} placeholder="Search movies by title" />
    </Container>
  );
};

export default Filter;
