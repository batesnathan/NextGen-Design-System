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
    tone: "default",
    size: "default",
    "aria-label": "Default icon button"
  }
};

export const Filled: Story = {
  args: {
    tone: "filled",
    size: "default",
    "aria-label": "Filled icon button"
  }
};

export const Small: Story = {
  args: {
    tone: "default",
    size: "small",
    "aria-label": "Small default icon button"
  }
};

export const SmallFilled: Story = {
  args: {
    tone: "filled",
    size: "small",
    "aria-label": "Small filled icon button"
  }
};

export const FigmaStack: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
      <IconButton tone="default" size="default" aria-label="Default icon button" />
      <IconButton tone="filled" size="default" aria-label="Filled icon button" />
      <IconButton tone="default" size="small" aria-label="Small default icon button" />
      <IconButton tone="filled" size="small" aria-label="Small filled icon button" />
    </div>
  )
};
