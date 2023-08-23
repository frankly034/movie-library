import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from ".";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Search Input",
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholderText: "Search here",
  },
};
