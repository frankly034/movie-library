"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Genre from "../../../models/genre";
import Movie from "../../../models/movie";

export interface FilterState {
  search: string;
  selectedGenres: Genre[];
  selectedMovie?: Movie | null;
  showFilter: boolean;
}

const initialState: FilterState = {
  search: "",
  selectedGenres: [],
  selectedMovie: null,
  showFilter: false,
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
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenres = state.selectedGenres.filter((genre) => {
        return genre.id !== action.payload;
      });
    },
    toggleShowFilter: (state) => {
      state.showFilter = toggleShowingFilter(state.showFilter);
    },
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const {
  setSearch,
  addGenre,
  removeGenre,
  toggleShowFilter,
  setSelectedMovie,
} = filterSlice.actions;

export default filterSlice.reducer;
