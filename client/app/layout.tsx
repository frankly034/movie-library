import "./globals.css";

import { FunctionComponent, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
