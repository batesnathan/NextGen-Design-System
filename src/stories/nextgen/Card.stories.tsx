import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../../components/Card";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=9:15";

const slotDefault = { background: "#dcdcdc" };
const slotSecondary = { background: "#d9e0f6" };

const meta = {
  title: "NextGen/Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Container card with multiple surface styles and optional selected state."
      }
    },
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
  parameters: {
    docs: {
      description: {
        story: "Acceptance: all surface variants keep identical card geometry while swapping tokens for fill and border."
      }
    }
  },
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
  parameters: {
    docs: {
      description: {
        story: "Acceptance: selected card preserves dimensions and introduces distinct selection treatment only."
      }
    }
  },
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
