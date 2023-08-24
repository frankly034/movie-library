"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Genre from "../../../models/genre";

export interface FilterState {
  search: string;
  selectedGenres: Genre[];
}

const initialState: FilterState = {
  search: "",
  selectedGenres: [],
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
  },
});

export const { setSearch, addGenre, removeGenre } = filterSlice.actions;

export default filterSlice.reducer;
