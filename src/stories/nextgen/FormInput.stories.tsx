import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormInput } from "../../components/FormInput";

const meta = {
  title: "NextGen/Components/Form Input",
  component: FormInput,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    showLabel: true,
    showSupportingContent: true
  }
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelProps: {
      labelText: "Text"
    },
    fieldProps: {
      fieldText: "Text",
      state: "default"
    },
    supportingTextProps: {
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
  }
};

export const NoLabel: Story = {
  args: {
    showLabel: false,
    showSupportingContent: true
  }
};

export const NoSupporting: Story = {
  args: {
    showLabel: true,
    showSupportingContent: false
  }
};
