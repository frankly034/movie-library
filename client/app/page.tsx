"use client";

import { FunctionComponent } from "react";

import {
  Filter,
  FilterBy,
  Heading,
  MovieList,
  PageWrapper,
  Title,
} from "../components";
import {
  useGetGenresQuery,
  useGetMoviesQuery,
} from "../redux/services/movieApi";

const Home: FunctionComponent = () => {
  const {
    data: paginatedMovies,
    isLoading,
    isFetching,
  } = useGetMoviesQuery({});
  const { data: paginatedGenres } = useGetGenresQuery({});
  return (
    <PageWrapper>
      <Heading />
      <Filter
        genres={paginatedGenres?.data.items}
        onSearch={() => console.log("searching")}
        onTagClick={() => console.log("clicked tag")}
      />
      <FilterBy genres={[]} onClickTag={() => console.log("Removing tag")} />
      {isFetching || isLoading ? (
        <Title>Loading</Title>
      ) : (
        <MovieList movies={paginatedMovies?.data.items} />
      )}
    </PageWrapper>
  );
};

export default Home;
