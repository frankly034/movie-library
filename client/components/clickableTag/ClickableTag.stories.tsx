import type { Meta, StoryObj } from "@storybook/react";

import ClickableTag from "./ClickableTag";

const meta: Meta<typeof ClickableTag> = {
  title: "Components/Clickable Tag",
  component: ClickableTag,
};

export default meta;

type Story = StoryObj<typeof ClickableTag>;

export const Default: Story = {
  args: {
    children: "Action",
    onClick: () => alert("Yaay!!!"),
  },
};
