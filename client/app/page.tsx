"use client";

import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Filter,
  FilterBy,
  Heading,
  Loading,
  MovieList,
  PageWrapper,
} from "../components";
import {
  useGetGenresQuery,
  useGetMoviesQuery,
} from "../redux/services/movieApi";
import {
  addGenre,
  removeGenre,
  setSearch,
  setSelectedMovie,
  toggleShowFilter,
  nextPage,
  previousPage,
} from "../redux/features/filter/filterSlice";
import Genre from "../models/genre";
import { RootState } from "../redux/store";
import Movie from "../models/movie";
import MovieNavigation from "../components/movieNavigation";

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  const { search, selectedGenres, showFilter, totalPages, currentPage } =
    useSelector((state: RootState) => state.filter);

  const handleAddGenre = (genre: Genre) => dispatch(addGenre(genre));
  const handleRemoveGenre = (genre: Genre) => dispatch(removeGenre(genre.id));
  const handleSearch = (search: string) => dispatch(setSearch(search));
  const handleClearSearch = () => dispatch(setSearch(""));
  const handleToggleShowFilter = () => dispatch(toggleShowFilter());
  const handleSelectMovie = (movie: Movie) => dispatch(setSelectedMovie(movie));
  const handleSetNextPage = () => dispatch(nextPage());
  const handleSetPreviousPage = () => dispatch(previousPage());

  // Todo: add display error feature
  const {
    data: paginatedMovies,
    isLoading,
    isFetching,
  } = useGetMoviesQuery(
    {
      search,
      page: currentPage.toString(),
      genres: selectedGenres.map((genre) => genre.id),
    },
    { refetchOnMountOrArgChange: true }
  );

  const { data: paginatedGenres } = useGetGenresQuery({});

  const showFilterBy = !!selectedGenres.length || search;

  const showLoading = isFetching || isLoading;

  return (
    <PageWrapper>
      <Heading showFilter={handleToggleShowFilter} />
      <MovieNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleSetNextPage}
        onPreviousPage={handleSetPreviousPage}
      />
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
        <Loading />
      ) : (
        <MovieList
          movies={paginatedMovies?.data.items}
          onClick={handleSelectMovie}
        />
      )}
    </PageWrapper>
  );
};

export default Home;
