import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextButton } from "../../components/TextButton";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=12:34";

const meta = {
  title: "NextGen/Components/Text Button",
  component: TextButton,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Low-emphasis text action with tone and padding variants for inline interactions."
      }
    },
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
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: default tone uses standard text contrast and default click target padding."
      }
    }
  }
};

export const Danger: Story = {
  args: {
    tone: "danger",
    padding: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: danger tone is reserved for destructive actions and remains readable on gray canvas."
      }
    }
  }
};

export const Subtle: Story = {
  args: {
    tone: "subtle",
    padding: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: subtle tone de-emphasizes action while preserving typography and alignment."
      }
    }
  }
};

export const FigmaMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: matrix compares tone, padding, and disabled combinations from the text-action state map."
      }
    }
  },
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

      <div style={{ height: 1, background: "#c2c2c2", margin: "4px 0" }} />

      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <TextButton tone="default" padding="default" disabled>
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="default" disabled>
          Button text
        </TextButton>
        <TextButton tone="danger" padding="default" disabled>
          Button text
        </TextButton>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <TextButton tone="default" padding="none" disabled>
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="none" disabled>
          Button text
        </TextButton>
        <TextButton tone="danger" padding="none" disabled>
          Button text
        </TextButton>
      </div>
    </div>
  )
};
