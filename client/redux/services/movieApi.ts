import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Movie from "../../models/movie";
import { getUrl } from "../utils";
import Genre from "@/models/genre";

interface PaginatedResponse<Tdata> {
  statusCode: 200;
  message: string[];
  data: {
    items: Tdata[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

interface SearchParams {
  limit?: string;
  page?: string;
  search?: string;
  genres?: string[];
}

const getAllMoviesUrl = (
  baseUrl: string,
  url: string,
  { limit = "12", page = "1", search = "", genres = [] }: SearchParams
): string =>
  getUrl({
    baseUrl,
    arrayParams: { genres },
    queryParams: { search, page, limit },
    url,
  });

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    getMovies: builder.query<PaginatedResponse<Movie>, SearchParams>({
      query: (searchParams) => getAllMoviesUrl(baseUrl, "movies", searchParams),
    }),
    getGenres: builder.query<PaginatedResponse<Genre>, SearchParams>({
      query: ({ limit = "20" }) =>
        getUrl({ baseUrl, url: "genres", queryParams: { limit } }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery, useGetGenresQuery } = movieApi;
