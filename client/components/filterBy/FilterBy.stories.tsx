import type { Meta, StoryObj } from "@storybook/react";

import FilterBy from ".";

const meta: Meta<typeof FilterBy> = {
  title: "Components/FilterBy",
  component: FilterBy,
};

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

export default meta;

type Story = StoryObj<typeof FilterBy>;

export const Default: Story = {
  args: {
    genres,
    onClickTag: () => alert("You clicked a tag"),
    search: "Spider",
  },
};

export const WithoutSearch: Story = {
  args: {
    genres,
    onClickTag: () => alert("You clicked a tag"),
  },
};

export const WithoutTags: Story = {
  args: {
    onClickTag: () => alert("You clicked a tag"),
    search: "Spider",
  },
};
