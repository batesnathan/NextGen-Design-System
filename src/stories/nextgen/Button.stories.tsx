import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../components/Button";

const meta = {
  title: "NextGen/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    children: "Continue"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary"
  }
};

export const AI: Story = {
  args: {
    variant: "ai"
  }
};

export const DangerPrimary: Story = {
  args: {
    variant: "dangerPrimary"
  }
};

export const DangerSecondary: Story = {
  args: {
    variant: "dangerSecondary"
  }
};

export const FigmaMatrix: Story = {
  render: () => {
    const sizes = ["default", "large", "small"] as const;
    const variants = [
      "primary",
      "secondary",
      "tertiary",
      "ai",
      "dangerPrimary",
      "dangerSecondary",
    ] as const;

    return (
      <div style={{ display: "grid", gap: 14 }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <Button key={`${variant}-${size}`} variant={variant} size={size}>
                Button text
              </Button>
            ))}
          </div>
        ))}

        <div style={{ height: 1, background: "#c2c2c2", margin: "4px 0" }} />

        {variants.map((variant) => (
          <div key={`${variant}-disabled`} style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <Button key={`${variant}-${size}-disabled`} variant={variant} size={size} disabled>
                Button text
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  }
};
