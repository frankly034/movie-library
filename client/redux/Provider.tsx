"use client";

import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";

interface ProviderProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
