import type { Meta, StoryObj } from "@storybook/react-vite";

import { SupportingText } from "../../components/SupportingText";

const meta = {
  title: "NextGen/Components/Supporting Text",
  component: SupportingText,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    showIcon: false
  }
} satisfies Meta<typeof SupportingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    showIcon: true
  }
};
