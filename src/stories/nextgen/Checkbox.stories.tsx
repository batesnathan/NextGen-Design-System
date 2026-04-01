import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../../components/Checkbox";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=10:22";

const meta = {
  title: "NextGen/Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Checkbox control with selected and unselected states for settings and forms."
      }
    },
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    defaultChecked: true
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: checked state displays check glyph centered within fixed 24px control bounds."
      }
    }
  }
};

export const Unchecked: Story = {
  args: {
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: unchecked state preserves border and size with no inner checkmark rendered."
      }
    }
  }
};

export const FigmaPair: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: side-by-side checked and unchecked controls should align to the same baseline and spacing."
      }
    }
  },
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <Checkbox checked aria-label="Checked" />
      <Checkbox checked={false} aria-label="Not selected" />
    </div>
  )
};
