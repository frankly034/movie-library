import { FunctionComponent } from "react";
import { styled } from "styled-components";

import Genre from "../../models/genre";
import { TagLabel } from "..";

interface GenresProps {
  genres: Genre[];
  maxCount?: number;
}

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.md} 0
    ${({ theme }) => theme.spacing.lg};
`;

const Genres: FunctionComponent<GenresProps> = ({ genres, maxCount }) => {
  const displayableGenres = maxCount ? genres?.slice(0, maxCount) : genres;
  return (
    <Container>
      {displayableGenres?.map((genre) => (
        <TagLabel key={genre.id}>{genre.name}</TagLabel>
      ))}
    </Container>
  );
};

export default Genres;
