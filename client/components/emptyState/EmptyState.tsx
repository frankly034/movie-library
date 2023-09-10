"use client";

import { faBattery0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

import { DisplayContainer, Text } from "..";

const Container = styled.div`
  color: ${({ theme }) => theme.palette.failureColor};
`;

const Loading: FunctionComponent = () => {
  return (
    <DisplayContainer>
      <Container>
        <FontAwesomeIcon icon={faBattery0} />
      </Container>
      <Text $size="large">Nothing to show here...</Text>
    </DisplayContainer>
  );
};

export default Loading;
