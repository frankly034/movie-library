"use client";

import styled from "styled-components";
import Image from "next/image";
import { FunctionComponent } from "react";

import Movie from "../../models/movie";
import { Genres, Ratings } from "..";

type MovieCardProps = {
  movie: Movie;
};

const Container = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.variables.borderRadius};

  transition: all;
  transition-duration: ${({ theme }) => theme.variables.transitionDuration};
  transition-delay: ${({ theme }) => theme.variables.transitionDelay};

  &:hover {
    border-color: ${({ theme }) => theme.colors.goldenYellow};
  }
`;

// TODO: add placeholder = blur functionality
const MovieCard: FunctionComponent<MovieCardProps> = ({
  movie: { posterPath, title, voteAverage, genres },
}) => {
  const rating = Number(voteAverage) / 2;
  return (
    <Container>
      <Image
        src={posterPath}
        alt={title}
        quality={100}
        width={300}
        height={450}
        style={{
          objectFit: "cover",
        }}
        priority
      />
      <Ratings rating={rating} />
      <Genres genres={genres} maxCount={3} />
    </Container>
  );
};

export default MovieCard;
