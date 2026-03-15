import type { Meta, StoryObj } from "@storybook/react-vite";

import { TopBar } from "../../components/TopBar";

const meta = {
  title: "NextGen/Components/Top Bar",
  component: TopBar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slim: Story = {
  args: {
    size: "slim"
  }
};

export const Expanded: Story = {
  args: {
    size: "expanded",
    showItems: true,
    greetingName: "Scott",
    notificationCount: 2
  }
};

export const ExpandedNoQuicklinks: Story = {
  args: {
    size: "expanded",
    showItems: false,
    greetingName: "Scott",
    notificationCount: 2
  }
};
