import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../../components/Card";

const slotDefault = { background: "#dcdcdc" };
const slotSecondary = { background: "#d9e0f6" };

const meta = {
  title: "NextGen/Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurfaceVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <Card layout="slot" surface="default">
        <div style={{ ...slotDefault, width: "100%", height: "100%" }} />
      </Card>

      <Card layout="slot" surface="secondary">
        <div style={{ ...slotSecondary, width: "100%", height: "100%" }} />
      </Card>

      <Card layout="slot" surface="tertiary">
        <div style={{ ...slotDefault, width: "100%", height: "100%" }} />
      </Card>

      <Card layout="slot" surface="outline">
        <div style={{ ...slotDefault, width: "100%", height: "100%" }} />
      </Card>
    </div>
  )
};

export const SelectableStates: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <Card layout="slot" surface="secondary">
        <div style={{ ...slotSecondary, width: "100%", height: "100%" }} />
      </Card>

      <Card layout="slot" surface="secondary" selected>
        <div style={{ ...slotSecondary, width: "100%", height: "100%" }} />
      </Card>
    </div>
  )
};
