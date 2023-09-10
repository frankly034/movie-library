"use client";

import styled from "styled-components";

const DisplayTag = styled.span`
  border-radius: ${({ theme }) => theme.variables.borderRadius};
  font-size: 12px;
  padding: 2px 4px;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  color: ${({ theme }) => theme.palette.foregroundSecondary};
`;

export default DisplayTag;
