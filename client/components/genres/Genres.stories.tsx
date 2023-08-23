import type { Meta, StoryObj } from "@storybook/react";

import Genres from "./";
const genres = [
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804e",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 9648,
    name: "Mystery",
  },
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804f",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 15,
    name: "Action",
  },
  {
    id: "4b4e23c5-1236-4344-992d-af194e86804a",
    createdAt: "2023-08-21T22:37:58.190Z",
    updatedAt: "2023-08-21T22:37:58.190Z",
    deletedAt: null,
    tmbdId: 35,
    name: "Suspense",
  },
];

const meta: Meta<typeof Genres> = {
  title: "Components/Genres",
  component: Genres,
};

export default meta;

type Story = StoryObj<typeof Genres>;

export const Default: Story = {
  args: {
    genres,
  },
};
