import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputLabel } from "../../components/InputLabel";

const meta = {
  title: "NextGen/Components/Input Label",
  component: InputLabel,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    labelText: "Text",
    showAction: false,
    showTooltipIcon: false
  }
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTooltip: Story = {
  args: {
    showTooltipIcon: true
  }
};

export const WithAction: Story = {
  args: {
    showAction: true
  }
};
