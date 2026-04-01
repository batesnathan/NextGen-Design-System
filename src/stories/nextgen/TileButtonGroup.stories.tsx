import type { Meta, StoryObj } from "@storybook/react-vite";

import { TileButtonGroup } from "../../components/TileButtonGroup";

const meta = {
  title: "NextGen/Components/Tile Button Group",
  component: TileButtonGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#d9d9d9" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TileButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Columns2: Story = {
  args: {
    columns: 2,
  },
};

export const Columns3: Story = {
  args: {
    columns: 3,
  },
};

export const FigmaFrame: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 20 }}>
      <TileButtonGroup columns={2} />
      <TileButtonGroup columns={3} />
    </div>
  ),
};
