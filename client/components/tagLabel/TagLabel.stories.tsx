import type { Meta, StoryObj } from "@storybook/react";

import TagLabel from ".";

const meta: Meta<typeof TagLabel> = {
  title: "Components/TagLabel",
  component: TagLabel,
};

export default meta;

type Story = StoryObj<typeof TagLabel>;

export const Default: Story = {
  args: {
    children: "Suspense",
  },
};
