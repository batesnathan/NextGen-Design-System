import type { Meta, StoryObj } from "@storybook/react-vite";

import { generatedTokens } from "../../tokens/generated/tokens";

const entries = Object.entries(generatedTokens).slice(0, 40);

const meta = {
  title: "NextGen/Tokens/Preview",
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlatMap: Story = {
  render: () => (
    <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12 }}>
      <h3 style={{ fontFamily: "inherit" }}>Generated token sample (first 40)</h3>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Token</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([name, value]) => (
            <tr key={name}>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{name}</td>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
