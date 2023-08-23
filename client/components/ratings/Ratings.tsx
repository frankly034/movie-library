"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface RatingsProps {
  rating: number;
}

const Container = styled.div`
  margin-bottom: 16px;
`;

const GoldStar = styled.span`
  color: #ffbf00;
`;

const GreyStar = styled.span`
  color: #6c6c6c;
`;

const Ratings: FunctionComponent<RatingsProps> = ({ rating }) => {
  return (
    <Container>
      {Array(5)
        .fill("stars")
        .map((cur, index) => {
          return index < rating ? (
            <GoldStar key={index}>
              <FontAwesomeIcon icon={faStar} />
            </GoldStar>
          ) : (
            <GreyStar key={index}>
              <FontAwesomeIcon icon={faStar} />
            </GreyStar>
          );
        })}
    </Container>
  );
};

export default Ratings;
