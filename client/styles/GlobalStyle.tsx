"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.palette.appBackground};
    color: #f9f9f9;
  }
`;

export default GlobalStyle;
