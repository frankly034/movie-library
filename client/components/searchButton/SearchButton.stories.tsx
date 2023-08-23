import type { Meta, StoryObj } from "@storybook/react";

import SearchButton from ".";

const meta: Meta<typeof SearchButton> = {
  title: "Components/Search Button",
  component: SearchButton,
};

export default meta;

type Story = StoryObj<typeof SearchButton>;

export const Default: Story = {
  args: {
    onClick: () => alert("🧐 what're you looking for..."),
  },
};
