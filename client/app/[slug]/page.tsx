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

interface ContainerProps {
  backdropPath: string;
}

const MoviePage: FunctionComponent = () => {
  const { selectedMovie: movie } = useSelector(
    (state: RootState) => state.filter
  );

  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to left, transparent -50%, #000),
      url(${(props) => props.backdropPath});
    height: 90vh;
    padding: 16px 32px;
    margin: -10px -32px -64px;
  `;

  const Content = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1180px) {
      width: 70%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1180px) and (orientation: landscape) {
      width: 70%;
    }
  `;

  const Row = styled.div`
    display: flex;
  `;

  const Back = styled(CustomLink)`
    font-size: 48px;
    margin-bottom: 24px;
    color: #ffbf00;
  `;

  return (
    <PageWrapper>
      <Heading showSearchButton={false} />
      {movie ? (
        <Container backdropPath={movie.backdropPath || ""}>
          <Row>
            <Back href="/">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </Back>
          </Row>
          <Content>
            <Title size="40px">{movie.title}</Title>
            <Ratings rating={Number(movie.voteAverage) / 2} />
            <Text>2023</Text>
            <Genres genres={movie.genres} />
            <VoteCount count={movie.voteCount} />
            <Text margin="16px 0" size="16px">
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
