import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../components/Button";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=6:70";

const meta = {
  title: "NextGen/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Primary action button. Use variant and size combinations from the Figma state matrix."
      }
    },
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
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: default height and padding for primary action; solid fill and high-contrast label."
      }
    }
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: secondary treatment preserves primary geometry while using bordered surface style."
      }
    }
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: tertiary style uses minimal chrome with readable text and consistent hit area."
      }
    }
  }
};

export const AI: Story = {
  args: {
    variant: "ai"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: AI variant follows designated highlight palette and keeps default spacing geometry."
      }
    }
  }
};

export const DangerPrimary: Story = {
  args: {
    variant: "dangerPrimary"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: destructive primary style uses alert surface while preserving default size and radius."
      }
    }
  }
};

export const DangerSecondary: Story = {
  args: {
    variant: "dangerSecondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: destructive secondary uses lower-emphasis chroma but identical spacing to other variants."
      }
    }
  }
};

export const FigmaMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Acceptance: matrix demonstrates variant x size for enabled and disabled states to mirror the design state map."
      }
    }
  },
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
