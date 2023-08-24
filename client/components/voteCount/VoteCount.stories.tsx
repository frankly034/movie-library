import type { Meta, StoryObj } from "@storybook/react";

import VoteCount from ".";

const meta: Meta<typeof VoteCount> = {
  title: "Components/Vote Count",
  component: VoteCount,
};

export default meta;

type Story = StoryObj<typeof VoteCount>;

export const Default: Story = {
  args: {
    count: 24435,
  },
};
