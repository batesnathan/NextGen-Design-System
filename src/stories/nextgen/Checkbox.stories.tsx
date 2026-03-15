import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../../components/Checkbox";

const meta = {
  title: "NextGen/Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    defaultChecked: true
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true
  }
};

export const Unchecked: Story = {
  args: {
    checked: false
  }
};

export const FigmaPair: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <Checkbox checked aria-label="Checked" />
      <Checkbox checked={false} aria-label="Not selected" />
    </div>
  )
};
