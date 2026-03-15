import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { BottomNav, bottomNavItems, type BottomNavItem } from "../../components/BottomNav";

const meta = {
  title: "NextGen/Components/Bottom Nav",
  component: BottomNav,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#f4f4f4" }]
    }
  },
  tags: ["autodocs"],
  args: {
    activeItem: "home"
  },
  argTypes: {
    activeItem: {
      options: [...bottomNavItems],
      control: { type: "inline-radio" }
    }
  }
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState<BottomNavItem>(args.activeItem ?? "home");

    return <BottomNav {...args} activeItem={activeItem} onItemSelect={setActiveItem} />;
  }
};

export const FigmaStateHome: Story = {
  args: {
    activeItem: "home"
  }
};

export const AllActiveStates: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      {bottomNavItems.map((item) => (
        <BottomNav key={item} activeItem={item} />
      ))}
    </div>
  )
};
