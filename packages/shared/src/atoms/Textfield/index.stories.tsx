import { Meta, StoryObj } from '@storybook/react'
import Textfield from './index'

const config: Meta<typeof Textfield> = {
  title: 'Textfield',
  component: Textfield,
  args: { placeholder: 'Text', error: 'Error' },
}

export default config

type Story = StoryObj<typeof Textfield>

export const Primary: Story = {
  args: {},
}
