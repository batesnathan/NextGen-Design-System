import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioButton } from "../../components/RadioButton";

const meta = {
  title: "NextGen/Components/Radio Button",
  component: RadioButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#f4f4f4" }]
    }
  },
  tags: ["autodocs"],
  args: {
    selected: true
  }
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {};

export const Unselected: Story = {
  args: {
    selected: false
  }
};

export const FigmaStack: Story = {
  render: () => (
    <div
      style={{
        border: "2px dashed #6f29ff",
        borderRadius: 8,
        display: "grid",
        gap: 12,
        padding: 8
      }}
    >
      <RadioButton selected />
      <RadioButton selected={false} />
    </div>
  )
};
