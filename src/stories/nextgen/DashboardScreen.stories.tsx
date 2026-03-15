import type { Meta, StoryObj } from "@storybook/react-vite";

import { DashboardScreen } from "../../components/DashboardScreen";

const meta = {
  title: "NextGen/Screens/Dashboard",
  component: DashboardScreen,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#e8e8ec" }]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof DashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {};
