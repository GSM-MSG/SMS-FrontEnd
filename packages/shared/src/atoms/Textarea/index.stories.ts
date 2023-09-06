import { Meta, StoryObj } from '@storybook/react'
import Textarea from './index'

const config: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  args: { error: 'ofweji', placeholder: 'hello' },
}

export default config

type Story = StoryObj<typeof Textarea>

export const Primary: Story = {}
