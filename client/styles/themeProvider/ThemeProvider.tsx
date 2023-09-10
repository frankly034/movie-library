"use client";

import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import theme from "./theme";
import { paletteDark } from "../palette";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const palette = paletteDark;

  return (
    <StyledThemeProvider theme={{ ...theme, palette }}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
