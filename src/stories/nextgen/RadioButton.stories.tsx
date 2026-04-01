import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioButton } from "../../components/RadioButton";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=11:18";

const meta = {
  title: "NextGen/Components/Radio Button",
  component: RadioButton,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Radio selector with selected and unselected states using layered icon geometry."
      }
    },
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#f4f4f4" }]
    }
  },
  tags: ["autodocs"],
  args: {
    selected: true
  }
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: selected state renders outer ring and centered inner fill circle without clipping."
      }
    }
  }
};

export const Unselected: Story = {
  args: {
    selected: false
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: unselected state preserves ring container and removes inner selected fill."
      }
    }
  }
};

export const FigmaStack: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: stacked states visually verify selected and unselected icon treatments from Figma export."
      }
    }
  },
  render: () => (
    <div
      style={{
        border: "2px dashed #6f29ff",
        borderRadius: 8,
        display: "grid",
        gap: 12,
        padding: 8
      }}
    >
      <RadioButton selected />
      <RadioButton selected={false} />
    </div>
  )
};
