"use client";

import Genre from "@/models/genre";
import { Ref, forwardRef } from "react";
import styled from "styled-components";

import { ClickableTag, SearchInput } from "..";

type FilterProps = {
  genres?: Genre[];
  onTagClick: (tag: Genre) => void;
  onSearch: (search: string) => void;
  search: string;
  forwardRef?: Ref<HTMLInputElement>;
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

// Todo: add debounce on search input
const Filter = forwardRef<HTMLInputElement, FilterProps>((props, ref) => {
  const { forwardRef, genres = [], onSearch, onTagClick, search = "" } = props;

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
        name="search-input"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search movies by title"
        value={search}
        forwardRef={forwardRef || ref}
      />
    </Container>
  );
});

export default Filter;
