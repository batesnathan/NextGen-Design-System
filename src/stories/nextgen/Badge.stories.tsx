import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../../components/Badge";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=8:20";

const meta = {
  title: "NextGen/Components/Badge",
  component: Badge,
  parameters: {
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Status badge with tone-based surface and text combinations used across cards and lists."
      }
    }
  },
  tags: ["autodocs"],
  args: {
    children: "Status"
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    tone: "neutral"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: neutral tone is the default informational badge with balanced contrast."
      }
    }
  }
};

export const Success: Story = {
  args: {
    tone: "success",
    children: "Completed"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: success tone indicates positive completion while keeping base badge dimensions."
      }
    }
  }
};

export const Warning: Story = {
  args: {
    tone: "warning",
    children: "Needs Review"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: warning tone remains legible on muted warning surface and keeps standard padding."
      }
    }
  }
};

export const Danger: Story = {
  args: {
    tone: "danger",
    children: "Blocked"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: danger tone uses highest alert contrast and is reserved for blocking states."
      }
    }
  }
};

export const LongLabel: Story = {
  args: {
    tone: "neutral",
    children: "Pending verification"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: long text should not clip and should maintain horizontal internal spacing."
      }
    }
  }
};

export const ToneMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: matrix compares all tones side by side for quick design review."
      }
    }
  },
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Badge tone="neutral">Status</Badge>
      <Badge tone="success">Completed</Badge>
      <Badge tone="warning">Needs Review</Badge>
      <Badge tone="danger">Blocked</Badge>
    </div>
  )
};
