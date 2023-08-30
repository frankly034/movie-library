import type { Meta, StoryObj } from "@storybook/react";

import Title from ".";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "Gift a friend this holiday",
    $color: "#f9f9f9",
    $size: "24px",
  },
};
