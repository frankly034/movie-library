"use client";

import { Ref, forwardRef } from "react";
import styled from "styled-components";

import Genre from "../../models/genre";
import { ClickableTag, SearchInput } from "..";

type FilterProps = {
  genres?: Genre[];
  onTagClick: (tag: Genre) => void;
  onSearch: (search: string) => void;
  forwardRef?: Ref<HTMLInputElement>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  overflow-y: scroll;
`;

const Filter = forwardRef<HTMLInputElement, FilterProps>((props, ref) => {
  const { forwardRef, genres = [], onSearch, onTagClick } = props;

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
        onSearch={onSearch}
        placeholder="Search movies by title"
        forwardRef={forwardRef || ref}
      />
    </Container>
  );
});

export default Filter;
