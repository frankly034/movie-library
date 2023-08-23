import type { Meta, StoryObj } from "@storybook/react";

import Ratings from ".";

const meta: Meta<typeof Ratings> = {
  title: "Components/Ratings",
  component: Ratings,
};

export default meta;

type Story = StoryObj<typeof Ratings>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};
