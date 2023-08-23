"use client";
import {
  Filter,
  FilterBy,
  Heading,
  MovieList,
  PageWrapper,
} from "@/components";
import { FunctionComponent } from "react";

const movies = [
  {
    id: "03ae0df0-5316-4e81-a351-5977747b6f35",
    createdAt: "2023-08-21T22:37:58.695Z",
    updatedAt: "2023-08-21T22:37:58.695Z",
    deletedAt: null,
    title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    voteAverage: "6.9",
    voteCount: 899,
    popularity: "1598.81",
    posterPath:
      "https://image.tmdb.org/t/p/original/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    releaseDate: "2023-07-05",
    genres: [
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804e",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 9648,
        name: "Mystery",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804f",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 15,
        name: "Action",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804a",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 35,
        name: "Suspense",
      },
    ],
  },
  {
    id: "03ae0df0-5316-4e81-a351-5977747b6f35",
    createdAt: "2023-08-21T22:37:58.695Z",
    updatedAt: "2023-08-21T22:37:58.695Z",
    deletedAt: null,
    title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    voteAverage: "6.9",
    voteCount: 899,
    popularity: "1598.81",
    posterPath:
      "https://image.tmdb.org/t/p/original/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    releaseDate: "2023-07-05",
    genres: [
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804e",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 9648,
        name: "Mystery",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804f",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 15,
        name: "Action",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804a",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 35,
        name: "Suspense",
      },
    ],
  },
  {
    id: "03ae0df0-5316-4e81-a351-5977747b6f35",
    createdAt: "2023-08-21T22:37:58.695Z",
    updatedAt: "2023-08-21T22:37:58.695Z",
    deletedAt: null,
    title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    voteAverage: "6.9",
    voteCount: 899,
    popularity: "1598.81",
    posterPath:
      "https://image.tmdb.org/t/p/original/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    releaseDate: "2023-07-05",
    genres: [
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804e",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 9648,
        name: "Mystery",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804f",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 15,
        name: "Action",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804a",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 35,
        name: "Suspense",
      },
    ],
  },
  {
    id: "03ae0df0-5316-4e81-a351-5977747b6f35",
    createdAt: "2023-08-21T22:37:58.695Z",
    updatedAt: "2023-08-21T22:37:58.695Z",
    deletedAt: null,
    title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    voteAverage: "6.9",
    voteCount: 899,
    popularity: "1598.81",
    posterPath:
      "https://image.tmdb.org/t/p/original/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    releaseDate: "2023-07-05",
    genres: [
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804e",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 9648,
        name: "Mystery",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804f",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 15,
        name: "Action",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804a",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 35,
        name: "Suspense",
      },
    ],
  },
  {
    id: "03ae0df0-5316-4e81-a351-5977747b6f35",
    createdAt: "2023-08-21T22:37:58.695Z",
    updatedAt: "2023-08-21T22:37:58.695Z",
    deletedAt: null,
    title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    voteAverage: "6.9",
    voteCount: 899,
    popularity: "1598.81",
    posterPath:
      "https://image.tmdb.org/t/p/original/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    releaseDate: "2023-07-05",
    genres: [
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804e",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 9648,
        name: "Mystery",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804f",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 15,
        name: "Action",
      },
      {
        id: "4b4e23c5-1236-4344-992d-af194e86804a",
        createdAt: "2023-08-21T22:37:58.190Z",
        updatedAt: "2023-08-21T22:37:58.190Z",
        deletedAt: null,
        tmbdId: 35,
        name: "Suspense",
      },
    ],
  },
];

const genres = [
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804e",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 9648,
    name: "Mystery",
  },
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804f",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 15,
    name: "Action",
  },
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804a",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 35,
    name: "Suspense",
  },
];

const Home: FunctionComponent = () => {
  return (
    <PageWrapper>
      <Heading />
      <Filter
        genres={genres}
        onSearch={() => console.log("searching")}
        onTagClick={() => console.log("clicked tag")}
      />
      <FilterBy
        genres={genres}
        onClickTag={() => console.log("Removing tag")}
      />
      <MovieList movies={movies} />
    </PageWrapper>
  );
};

export default Home;
