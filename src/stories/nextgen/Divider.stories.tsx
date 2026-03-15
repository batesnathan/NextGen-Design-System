import type { Meta, StoryObj } from "@storybook/react-vite";

import { Divider } from "../../components/Divider";

const meta = {
  title: "NextGen/Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    direction: "vertical"
  },
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" }
    }
  }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    direction: "vertical",
    length: 120
  }
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    length: 320
  }
};

export const FigmaPreview: Story = {
  render: () => (
    <div
      style={{
        border: "2px dashed #6f29ff",
        borderRadius: 8,
        display: "grid",
        gap: 24,
        padding: 18,
        width: 420
      }}
    >
      <Divider direction="vertical" length={120} />
      <Divider direction="horizontal" length={320} />
    </div>
  )
};
