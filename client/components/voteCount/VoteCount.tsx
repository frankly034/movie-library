import styled from "styled-components";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

interface VoteCountProps {
  count: number;
}

const VoteCount: FunctionComponent<VoteCountProps> = ({ count }) => {
  return (
    <Container>
      <IconWrapper>
        <FontAwesomeIcon icon={faThumbsUp} />
      </IconWrapper>
      {count}
    </Container>
  );
};

const IconWrapper = styled.span`
  color: #ffbf00;
`;

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid 1px ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  padding: 2px 8px;
  width: 75px;
`;

export default VoteCount;
