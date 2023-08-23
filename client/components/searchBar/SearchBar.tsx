"use client";

import Genre from "@/models/genre";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { ClickableTag, SearchInput } from "..";

type SearchBarProps = {
  genres: Genre[];
  onTagClick: (tag: Genre) => void;
  onSearchClick: () => void;
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

const SearchBar: FunctionComponent<SearchBarProps> = ({
  genres,
  onSearchClick,
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
      <SearchInput
        onChange={onSearchClick}
        placeholderText="Search movies by title"
      />
    </Container>
  );
};

export default SearchBar;
