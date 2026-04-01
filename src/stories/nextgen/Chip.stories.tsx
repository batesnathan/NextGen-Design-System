import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "../../components/Chip";

const meta = {
  title: "NextGen/Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }],
    },
  },
  tags: ["autodocs"],
  args: {
    label: "Test",
    selected: false,
    showLeftIcon: false,
    showRightIcon: false,
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    showLeftIcon: true,
  },
};

export const WithRightIcon: Story = {
  args: {
    showRightIcon: true,
  },
};

export const FigmaMatrix: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Chip label="Test" />
        <Chip label="Test" showLeftIcon />
        <Chip label="Test" showRightIcon />
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Chip label="Test" selected />
        <Chip label="Test" selected showLeftIcon />
        <Chip label="Test" selected showRightIcon />
      </div>
    </div>
  ),
};
