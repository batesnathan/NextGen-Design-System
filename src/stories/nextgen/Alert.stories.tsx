import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "../../components/Alert";

const message = "Mauris feugiat maximus auctor.";

const meta = {
  title: "NextGen/Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    message,
    tone: "danger",
    styleType: "subtle"
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DangerSubtle: Story = {};

export const FigmaMatrix: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 14 }}>
      <Alert tone="danger" styleType="subtle" message={message} />
      <Alert tone="callout" styleType="subtle" message={message} />
      <Alert tone="warning" styleType="subtle" message={message} />
      <Alert tone="success" styleType="subtle" message={message} />
      <Alert tone="neutral" styleType="subtle" message={message} />

      <Alert tone="danger" styleType="vibrant" message={message} />
      <Alert tone="callout" styleType="vibrant" message={message} />
      <Alert tone="warning" styleType="vibrant" message={message} />
      <Alert tone="success" styleType="vibrant" message={message} />
      <Alert tone="neutral" styleType="vibrant" message={message} />
    </div>
  )
};
