import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toast } from "../../components/Toast";

const meta = {
  title: "NextGen/Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    message: "Mauris feugiat maximus auctor.",
    dismissable: true,
    showIcon: false,
    showActions: false
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    showIcon: true
  }
};

export const WithAction: Story = {
  args: {
    showActions: true
  }
};

export const NoDismiss: Story = {
  args: {
    dismissable: false
  }
};
