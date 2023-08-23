"use client";

import styled from "styled-components";

import Movie from "../../models/movie";
import { FunctionComponent } from "react";
import { MovieCard } from "..";

type MovieListProps = {
  movies: Movie[];
  size?: string;
  margin?: string;
};

const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 16px;
`;

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
