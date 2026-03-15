import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../../components/Badge";

const meta = {
  title: "NextGen/Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Status"
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    tone: "neutral"
  }
};

export const Success: Story = {
  args: {
    tone: "success",
    children: "Completed"
  }
};

export const Warning: Story = {
  args: {
    tone: "warning",
    children: "Needs Review"
  }
};

export const Danger: Story = {
  args: {
    tone: "danger",
    children: "Blocked"
  }
};
