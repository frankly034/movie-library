import type { Preview } from "@storybook/react";
import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
