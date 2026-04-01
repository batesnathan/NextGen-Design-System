import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconButton } from "../../components/IconButton";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=13:12";

const meta = {
  title: "NextGen/Components/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Compact icon-only action button with tone and size variants."
      }
    },
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
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: default size keeps icon centered with neutral surface and full tap target."
      }
    }
  }
};

export const Filled: Story = {
  args: {
    tone: "filled",
    size: "default",
    "aria-label": "Filled icon button"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: filled tone uses stronger surface color while retaining default geometry."
      }
    }
  }
};

export const Small: Story = {
  args: {
    tone: "default",
    size: "small",
    "aria-label": "Small default icon button"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: small size scales container and icon proportionally without changing icon alignment."
      }
    }
  }
};

export const SmallFilled: Story = {
  args: {
    tone: "filled",
    size: "small",
    "aria-label": "Small filled icon button"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: small-filled preserves compact sizing while maintaining clear contrast for icon glyph."
      }
    }
  }
};

export const FigmaStack: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: stacked view allows direct inspection of all tone/size combinations against design source."
      }
    }
  },
  render: () => (
    <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
      <IconButton tone="default" size="default" aria-label="Default icon button" />
      <IconButton tone="filled" size="default" aria-label="Filled icon button" />
      <IconButton tone="default" size="small" aria-label="Small default icon button" />
      <IconButton tone="filled" size="small" aria-label="Small filled icon button" />
    </div>
  )
};
