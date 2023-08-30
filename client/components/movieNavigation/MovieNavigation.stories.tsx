import type { Meta, StoryObj } from "@storybook/react";

import MovieNavigation from ".";

const meta: Meta<typeof MovieNavigation> = {
  title: "Components/Movie Navigation",
  component: MovieNavigation,
};

export default meta;

type Story = StoryObj<typeof MovieNavigation>;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 2,
  },
};
