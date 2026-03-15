import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag, tagColors } from "../../components/Tag";

const meta = {
  title: "NextGen/Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Tag text",
    tone: "neutral",
    appearance: "vibrant",
    showLeftIcon: false,
    showRightIcon: false
  },
  argTypes: {
    tone: {
      options: [...tagColors],
      control: { type: "select" }
    },
    appearance: {
      options: ["vibrant", "subtle"],
      control: { type: "inline-radio" }
    }
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FigmaMatrix: Story = {
  render: () => {
    const subtleSet = ["neutral", "callout", "success", "warning", "danger"] as const;
    const vibrantSet = [
      "neutral",
      "callout",
      "success",
      "warning",
      "danger",
      "pink",
      "orchid",
      "lavender",
      "blue",
      "turquoise"
    ] as const;

    return (
      <div
        style={{
          display: "grid",
          gap: 12,
          padding: 16,
          borderRadius: 8,
          border: "2px dashed #6f29ff"
        }}
      >
        {subtleSet.map((tone) => (
          <Tag key={`subtle-${tone}`} tone={tone} appearance="subtle">
            Tag text
          </Tag>
        ))}

        {vibrantSet.map((tone) => (
          <Tag key={`vibrant-${tone}`} tone={tone} appearance="vibrant">
            Tag text
          </Tag>
        ))}
      </div>
    );
  }
};
