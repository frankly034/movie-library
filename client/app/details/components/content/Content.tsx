import styled from "styled-components";

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

export default Content;
