import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccountsScreen } from "../../components/AccountsScreen";

const meta = {
  title: "NextGen/Screens/Accounts",
  component: AccountsScreen,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#e8e8ec" }]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AccountsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {};