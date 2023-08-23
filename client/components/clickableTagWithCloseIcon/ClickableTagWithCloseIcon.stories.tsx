import type { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

export const WithAddonBefore: Story = {
  args: {
    children: "Extraction",
    onClick: () => alert("😔 Sad I have to go..."),
    addonBefore: <FontAwesomeIcon icon={faSearch} />,
  },
};
