import type { Meta, StoryObj } from "@storybook/react-vite";

import { KnowledgeCard } from "../../components/KnowledgeCard";

const meta = {
  title: "NextGen/Components/Knowledge Card",
  component: KnowledgeCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    text: "Building your savings for your family",
    time: "3 min",
    showPoints: true,
    points: 25
  }
} satisfies Meta<typeof KnowledgeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutPoints: Story = {
  args: {
    showPoints: false
  }
};

export const FigmaVariantSet: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
      <KnowledgeCard />
      <KnowledgeCard showPoints={false} />
    </div>
  )
};
