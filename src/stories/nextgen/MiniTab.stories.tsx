import type { Meta, StoryObj } from "@storybook/react-vite";

import { MiniTab } from "../../components/MiniTab";

const meta = {
  title: "NextGen/Components/Mini Tab",
  component: MiniTab,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#f4f4f4" }]
    }
  },
  tags: ["autodocs"],
  args: {
    label: "Text",
    selected: false
  }
} satisfies Meta<typeof MiniTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true
  }
};

export const FigmaStack: Story = {
  render: () => (
    <div
      style={{
        border: "2px dashed #6f29ff",
        borderRadius: 8,
        display: "grid",
        gap: 16,
        padding: 12
      }}
    >
      <MiniTab label="Text" selected={false} />
      <MiniTab label="Text" selected />
    </div>
  )
};
