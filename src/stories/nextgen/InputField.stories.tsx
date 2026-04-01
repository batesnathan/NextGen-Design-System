import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputField } from "../../components/InputField";

const figmaUrl = "https://figma.com/design/[fileKey]/NextGen-Design-System?node-id=7:10";

const meta = {
  title: "NextGen/Components/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
    figma: {
      url: figmaUrl
    },
    docs: {
      description: {
        component: "Single-line input container with default, focused, and error states plus optional affixes and icons."
      }
    },
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    fieldText: "Text",
    placeholder: false,
    state: "default"
  }
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Acceptance: resting border, filled text style, and no validation indicator."
      }
    }
  }
};

export const DefaultPlaceholder: Story = {
  args: {
    placeholder: true
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: placeholder text tone is subdued while preserving baseline input geometry."
      }
    }
  }
};

export const Active: Story = {
  args: {
    state: "active"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: focused/active state increases emphasis on container border without changing layout."
      }
    }
  }
};

export const ActiveWithPrefix: Story = {
  args: {
    state: "active",
    showPrefixText: true,
    prefixText: "$"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: active state with prefix keeps text and affix vertically centered and aligned."
      }
    }
  }
};

export const Error: Story = {
  args: {
    state: "error"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: error state applies alert border and icon treatment while preserving input dimensions."
      }
    }
  }
};

export const ErrorWithRightIcon: Story = {
  args: {
    state: "error",
    showRightIcon: true
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: right icon and error indicator coexist without clipping or spacing collisions."
      }
    }
  }
};

export const ErrorActive: Story = {
  args: {
    state: "error-active"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: error-active combines focus emphasis with error affordance for high-visibility validation."
      }
    }
  }
};

export const ActiveWithLeftAndSuffix: Story = {
  args: {
    state: "active",
    showLeftIcon: true,
    showSuffixText: true,
    suffixText: "miles"
  },
  parameters: {
    docs: {
      description: {
        story: "Acceptance: left icon and suffix text remain aligned with input baseline in focused state."
      }
    }
  }
};

export const FigmaMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Acceptance: matrix displays core combinations for default, active, error, placeholder, and icon/affix variants."
      }
    }
  },
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 460 }}>
      <InputField state="default" fieldText="Text" />
      <InputField state="default" fieldText="Text" placeholder />
      <InputField state="error" fieldText="Text" />
      <InputField state="error" fieldText="Text" placeholder />
      <InputField state="error" fieldText="Text" showRightIcon />
      <InputField state="error" fieldText="Text" placeholder showRightIcon />
      <InputField state="active" fieldText="Text" />
      <InputField state="active" fieldText="Text" placeholder />
    </div>
  )
};
