"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

import Movie from "../../models/movie";
import { CustomLink, EmptyState, MovieCard } from "..";

type MovieListProps = {
  movies?: Movie[];
  onClick?: (movie: Movie) => void;
};

const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 16px;
`;

const MovieList: FunctionComponent<MovieListProps> = ({ movies, onClick }) => {
  return (
    <Container>
      {movies && movies.length ? (
        movies.map((movie) => (
          <CustomLink
            onClick={() => onClick && onClick(movie)}
            key={movie.id}
            href={`/${movie.id}`}
          >
            <MovieCard movie={movie} />
          </CustomLink>
        ))
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};

export default MovieList;
