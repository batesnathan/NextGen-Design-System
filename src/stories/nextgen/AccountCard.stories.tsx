import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccountCard } from "../../components/AccountCard";

const meta = {
  title: "NextGen/Components/Account Card",
  component: AccountCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#d9d9d9" }]
    }
  },
  tags: ["autodocs"],
  args: {
    size: "large",
    variant: "hsa"
  }
} satisfies Meta<typeof AccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HSA: Story = {};

export const FigmaMatrix: Story = {
  render: () => {
    const variants = [
      "hsa",
      "lp-fsa",
      "healthcare-fsa-use-date",
      "healthcare-fsa",
      "commuter-transit",
      "commuter-parking",
      "lifestyle",
      "hra"
    ] as const;

    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
        <div style={{ display: "grid", gap: 12 }}>
          {variants.map((variant) => (
            <AccountCard key={`lg-${variant}`} size="large" variant={variant} />
          ))}
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {variants.map((variant) => (
            <AccountCard key={`sm-${variant}`} size="small" variant={variant} />
          ))}
        </div>
      </div>
    );
  }
};
