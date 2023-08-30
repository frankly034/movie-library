"use client";

import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";

import { RootState } from "../../redux/store";
import {
  CustomLink,
  EmptyState,
  Genres,
  Heading,
  PageWrapper,
  Ratings,
  Text,
  Title,
  VoteCount,
} from "../../components";
import { Back, Container, Content, Row } from "./components";

const MoviePage: FunctionComponent = () => {
  const { selectedMovie: movie } = useSelector(
    (state: RootState) => state.filter
  );

  let releaseYear = 0;

  if (movie?.releaseDate) {
    const releaseDate = new Date(movie?.releaseDate);
    releaseYear = releaseDate.getFullYear();
  }

  return (
    <PageWrapper>
      <Heading showSearchButton={false} />
      {movie ? (
        <Container $backdropPath={movie.backdropPath || ""}>
          <Row>
            <Back href="/">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </Back>
          </Row>
          <Content>
            <Title $size="40px">{movie.title}</Title>
            <Ratings rating={Number(movie.voteAverage) / 2} />
            <Text $size="24px">{releaseYear || "-"}</Text>
            <Genres genres={movie.genres} />
            <VoteCount count={movie.voteCount} />
            <Text $margin="16px 0" $size="16px">
              {movie.overview}
            </Text>
          </Content>
        </Container>
      ) : (
        <EmptyState />
      )}
    </PageWrapper>
  );
};

export default MoviePage;
