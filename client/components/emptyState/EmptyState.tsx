"use client";

import { faBattery0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

import { DisplayContainer, Text } from "..";

const Container = styled.div`
  color: #c32020;
`;

const Loading: FunctionComponent = () => {
  return (
    <DisplayContainer>
      <Container>
        <FontAwesomeIcon icon={faBattery0} />
      </Container>
      <Text size="48px">Nothing to show here...</Text>
    </DisplayContainer>
  );
};

export default Loading;
