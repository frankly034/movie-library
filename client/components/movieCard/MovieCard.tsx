"use client";

import styled from "styled-components";
import Image from "next/image";
import { FunctionComponent } from "react";

import Movie from "../../models/movie";
import { Genres, Ratings, Title } from "..";

type MovieCardProps = {
  movie: Movie;
};

const Container = styled.div`
  width: 300px;
  border: 1px solid #6c6c6c;
  padding: 8px;
  border-radius: 4px;

  transition: all;
  transition-duration: 0.5s;
  transition-delay: 0.1s;

  &:hover {
    pointer: cursor;
    transform: scale(1.05)
    border-color: #ffbf00;
  }
`;

const MovieCard: FunctionComponent<MovieCardProps> = ({
  movie: { posterPath, title, voteAverage, genres },
}) => {
  const rating = Number(voteAverage) / 2;
  return (
    <Container>
      <Image
        src={posterPath}
        alt={title}
        // placeholder="blur"
        quality={100}
        width={300}
        height={450}
        // fill
        style={{
          objectFit: "cover",
        }}
      />
      <Title size="24px" margin="16px 0 8px">
        {title}
      </Title>
      <Ratings rating={rating} />
      <Genres genres={genres} />
    </Container>
  );
};

export default MovieCard;
