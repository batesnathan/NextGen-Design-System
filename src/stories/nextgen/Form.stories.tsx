import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";

const meta = {
  title: "NextGen/Patterns/Form Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  render: () => (
    <div style={{ width: 380, maxWidth: "90vw" }}>
      <Card>
        <Stack gap="var(--ng-space-4)">
          <Stack gap="var(--ng-space-2)">
            <Text as="h2" variant="title-3">
              Welcome back
            </Text>
            <Text variant="body-2">Use NextGen semantic tokens to keep UI consistent.</Text>
          </Stack>

          <Stack gap="var(--ng-space-2)">
            <Input placeholder="Email" aria-label="Email" />
            <Input placeholder="Password" type="password" aria-label="Password" />
          </Stack>

          <Button>Sign in</Button>
        </Stack>
      </Card>
    </div>
  )
};
