import type { Meta, StoryObj } from "@storybook/react";

import DisplayTag from ".";

const meta: Meta<typeof DisplayTag> = {
  title: "Components/DisplayTag",
  component: DisplayTag,
};

export default meta;

type Story = StoryObj<typeof DisplayTag>;

export const Default: Story = {
  args: {
    children: "Suspense",
  },
};
