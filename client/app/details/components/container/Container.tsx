import { styled } from "styled-components";

interface ContainerProps {
  $backdropPath: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, transparent -50%, #000),
    url(${(props) => props.$backdropPath});
  height: 90vh;
  padding: 16px 32px;
  margin: -10px -32px -64px;
`;

export default Container;
