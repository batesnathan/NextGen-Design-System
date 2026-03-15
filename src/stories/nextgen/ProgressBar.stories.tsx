import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressBar } from "../../components/ProgressBar";

const meta = {
  title: "NextGen/Components/Progress Bar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#f4f4f4" }]
    }
  },
  tags: ["autodocs"],
  args: {
    value: 63,
    max: 100
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FigmaValue: Story = {
  args: {
    value: 63.13
  }
};

export const ProgressScale: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <ProgressBar value={16} />
      <ProgressBar value={38} />
      <ProgressBar value={63.13} />
      <ProgressBar value={82} />
      <ProgressBar value={100} />
    </div>
  )
};
