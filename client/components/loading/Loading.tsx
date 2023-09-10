"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

import { Text } from "..";

export const DisplayContainer = styled.div`
  display: flex;
  font-size: 48px;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  height: 50vh;
`;

const Loading: FunctionComponent = () => {
  return (
    <DisplayContainer>
      <FontAwesomeIcon icon={faSpinner} spin />
      <Text $size="large">Loading...</Text>
    </DisplayContainer>
  );
};

export default Loading;
