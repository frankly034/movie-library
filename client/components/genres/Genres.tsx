import { FunctionComponent } from "react";
import { styled } from "styled-components";

import Genre from "../../models/genre";
import { TagLabel } from "..";

interface GenresProps {
  genres: Genre[];
}
const Container = styled.div`
  display: flex;
  gap: 4px;
  overflow: hidden;
  margin: 8px 0 16px;
`;

const Genres: FunctionComponent<GenresProps> = ({ genres }) => {
  return (
    <Container>
      {genres.slice(0, 3).map((genre) => (
        <TagLabel key={genre.id}>{genre.name}</TagLabel>
      ))}
    </Container>
  );
};

export default Genres;
