import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputField } from "../../components/InputField";

const meta = {
  title: "NextGen/Components/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
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

export const Default: Story = {};

export const Active: Story = {
  args: {
    state: "active"
  }
};

export const Error: Story = {
  args: {
    state: "error"
  }
};

export const ErrorActive: Story = {
  args: {
    state: "error-active"
  }
};

export const FigmaMatrix: Story = {
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
