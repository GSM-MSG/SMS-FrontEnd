import type { Preview } from '@storybook/react'
import '../packages/shared/src/style/devStyle.css'
import '../packages/shared/src/style/global.css'
import '../packages/shared/public/font.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
