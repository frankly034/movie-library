import type { Meta, StoryObj } from "@storybook/react";

import EmptyState from ".";

const meta: Meta<typeof EmptyState> = {
  title: "Components/Empty State",
  component: EmptyState,
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};
