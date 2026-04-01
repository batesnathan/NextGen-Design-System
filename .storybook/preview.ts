import type { Preview } from '@storybook/react-vite'

import '../src/styles/system.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }),
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;