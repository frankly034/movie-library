import "./globals.css";

import { FunctionComponent, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "./Registry";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Entain Movie Library",
  description: "A movie library application powered with data from TMDB",
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <StyledComponentsRegistry>
      <body className={inter.className}>{children}</body>
    </StyledComponentsRegistry>
  </html>
);

export default RootLayout;
