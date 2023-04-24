import StyleProvider from '../src/style'
import '../public/font.css'
import '../src/style/global.css'

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
    <StyleProvider>
      <Story />
    </StyleProvider>
  ),
]

export default preview
