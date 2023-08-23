import type { Meta, StoryObj } from "@storybook/react";

import ClickableTagWithCloseIcon from ".";

const meta: Meta<typeof ClickableTagWithCloseIcon> = {
  title: "Components/Clickable Tag With Close Icon",
  component: ClickableTagWithCloseIcon,
};

export default meta;

type Story = StoryObj<typeof ClickableTagWithCloseIcon>;

export const Default: Story = {
  args: {
    children: "Action",
    onClick: () => alert("😔 Sad I have to go..."),
  },
};
