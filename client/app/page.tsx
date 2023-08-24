"use client";

import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import {
  addGenre,
  removeGenre,
  setSearch,
  toggleShowFilter,
} from "../redux/features/filter/filterSlice";
import Genre from "../models/genre";
import { RootState } from "../redux/store";

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  const { search, selectedGenres, showFilter } = useSelector(
    (state: RootState) => state.filter
  );

  const handleAddGenre = (genre: Genre) => dispatch(addGenre(genre));
  const handleRemoveGenre = (genre: Genre) => dispatch(removeGenre(genre.id));
  const handleSearch = (search: string) => dispatch(setSearch(search));
  const handleClearSearch = () => dispatch(setSearch(""));
  const handleToggleShowFilter = () => dispatch(toggleShowFilter());

  const {
    data: paginatedMovies,
    isLoading,
    isFetching,
  } = useGetMoviesQuery({
    search,
    genres: selectedGenres.map((genre) => genre.id),
  });

  const { data: paginatedGenres } = useGetGenresQuery({});

  const showFilterBy = !!selectedGenres.length || search;

  const showLoading = isFetching || isLoading;

  return (
    <PageWrapper>
      <Heading showFilter={handleToggleShowFilter} />
      {showFilter && (
        <Filter
          genres={paginatedGenres?.data.items}
          onSearch={handleSearch}
          onTagClick={handleAddGenre}
          search={search}
        />
      )}
      {showFilterBy && (
        <FilterBy
          search={search}
          genres={selectedGenres}
          onClickTag={handleRemoveGenre}
          onClearSearch={handleClearSearch}
        />
      )}
      {showLoading ? (
        <Title>Loading</Title>
      ) : (
        <MovieList movies={paginatedMovies?.data.items} />
      )}
    </PageWrapper>
  );
};

export default Home;
