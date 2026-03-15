import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextButton } from "../../components/TextButton";

const meta = {
  title: "NextGen/Components/Text Button",
  component: TextButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    children: "Button text"
  }
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tone: "default",
    padding: "default"
  }
};

export const Danger: Story = {
  args: {
    tone: "danger",
    padding: "default"
  }
};

export const Subtle: Story = {
  args: {
    tone: "subtle",
    padding: "default"
  }
};

export const FigmaMatrix: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 14 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <TextButton tone="default" padding="default">
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="default">
          Button text
        </TextButton>
        <TextButton tone="danger" padding="default">
          Button text
        </TextButton>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <TextButton tone="default" padding="none">
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="none">
          Button text
        </TextButton>
        <TextButton tone="danger" padding="none">
          Button text
        </TextButton>
      </div>
    </div>
  )
};
