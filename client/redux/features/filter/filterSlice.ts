"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Genre from "../../../models/genre";

export interface FilterState {
  search: string;
  genres: Genre[];
}

const initialState: FilterState = {
  search: "",
  genres: [],
};

const addNewTag = (genre: Genre, genres: Genre[]): Genre[] => {
  const foundTag = genres.filter((curGenre) => curGenre.id === genre.id);
  if (foundTag.length) {
    return genres;
  }
  return [...(genres || []), genre];
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    addTag: (state, action: PayloadAction<Genre>) => {
      state.genres = addNewTag(action.payload, state.genres);
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.genres = state.genres.filter((genre) => {
        return genre.id !== action.payload;
      });
    },
  },
});

export const { setSearch, addTag, removeTag } = filterSlice.actions;

export default filterSlice.reducer;
