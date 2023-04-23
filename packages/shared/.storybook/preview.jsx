import { GlobalTheme } from '../src/GlobalTheme'

const preview = {
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

export const decorators = [
  (Story) => (
    <GlobalTheme>
      <Story />
    </GlobalTheme>
  ),
]

export default preview
