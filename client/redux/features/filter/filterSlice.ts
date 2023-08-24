"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Genre from "../../../models/genre";
import Movie from "../../../models/movie";
import { movieApi } from "@/redux/services/movieApi";

export interface FilterState {
  search: string;
  selectedGenres: Genre[];
  selectedMovie?: Movie | null;
  showFilter: boolean;
  totalPages: number;
  currentPage: number;
}

const initialState: FilterState = {
  search: "",
  selectedGenres: [],
  selectedMovie: null,
  showFilter: false,
  totalPages: 1,
  currentPage: 1,
};

const addNewGenre = (genre: Genre, selectedGenres: Genre[]): Genre[] => {
  const foundTag = selectedGenres.filter(
    (curGenre) => curGenre.id === genre.id
  );
  if (foundTag.length) {
    return selectedGenres;
  }
  return [...(selectedGenres || []), genre];
};

const toggleShowingFilter = (showFilter: boolean) => {
  return !showFilter;
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    addGenre: (state, action: PayloadAction<Genre>) => {
      state.selectedGenres = addNewGenre(action.payload, state.selectedGenres);
      state.currentPage = 1;
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenres = state.selectedGenres.filter((genre) => {
        return genre.id !== action.payload;
      });
      state.currentPage = 1;
    },
    toggleShowFilter: (state) => {
      state.showFilter = toggleShowingFilter(state.showFilter);
    },
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
    nextPage: (state) => {
      state.totalPages !== state.currentPage && state.currentPage++;
    },
    previousPage: (state) => {
      state.currentPage !== 1 && state.currentPage--;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      movieApi.endpoints.getMovies.matchFulfilled,
      (state, action) => {
        state.totalPages = action.payload.data.meta.totalPages;
      }
    );
  },
});

export const {
  setSearch,
  addGenre,
  removeGenre,
  toggleShowFilter,
  setSelectedMovie,
  nextPage,
  previousPage,
} = filterSlice.actions;

export default filterSlice.reducer;
