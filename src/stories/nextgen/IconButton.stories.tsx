import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconButton } from "../../components/IconButton";

const meta = {
  title: "NextGen/Components/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    "aria-label": "Default icon button"
  }
};

export const Surface: Story = {
  args: {
    variant: "surface",
    "aria-label": "Surface icon button"
  }
};

export const Compact: Story = {
  args: {
    variant: "compact",
    "aria-label": "Compact icon button"
  }
};

export const FigmaStack: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
      <IconButton variant="default" aria-label="Default icon button" />
      <IconButton variant="surface" aria-label="Surface icon button" />
      <IconButton variant="compact" aria-label="Compact icon button" />
    </div>
  )
};
